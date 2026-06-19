import type { Request, Response } from "express";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { sendEventBookingEmail, sendMerchOrderEmail } from "../../../lib/email";
import { createPrintfulOrder } from "../../../lib/printful";

export async function POST(req: Request, res: Response) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!stripeKey || !supabaseUrl || !supabaseServiceKey) {
    return res.status(500).json({ error: "Server not configured" });
  }

  const stripe = new Stripe(stripeKey);
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { session_id } = req.body;

    if (!session_id) {
      return res.status(400).json({ error: "Missing session_id" });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid") {
      return res.status(400).json({ error: "Payment not completed" });
    }

    if (session.metadata?.type === "event_booking") {
      const eventId = session.metadata.event_id;
      const seats = Number(session.metadata.seats || 1);

      const { data: eventRow, error: eventError } = await supabase
  .from("events")
  .select("id, title, booked_seats, total_seats")
  .eq("id", eventId)
  .single();

      if (eventError) throw eventError;

      const newBookedSeats = Number(eventRow.booked_seats || 0) + seats;

            const { error: updateError } = await supabase
        .from("events")
        .update({ booked_seats: newBookedSeats })
        .eq("id", eventId);

      if (updateError) throw updateError;

      await sendEventBookingEmail({
        to: session.metadata.customer_email || session.customer_details?.email || "",
        name: session.metadata.customer_name || "Guest",
        eventTitle: session.metadata.event_title || "Jawsome Derby Fun Bus Event",
        seats,
        total: session.amount_total ? session.amount_total / 100 : 0,
      });

      return res.json({
  success: true,
  message: "Booking recorded",
  eventId,
  oldBookedSeats: Number(eventRow.booked_seats || 0),
  seatsAdded: seats,
  newBookedSeats,
});
    }


if (session.metadata?.type === "store_order") {
  const rawItems = session.metadata.items || "[]";
  const items = JSON.parse(rawItems);
  const customerEmail =
  session.metadata.customer_email ||
  session.customer_details?.email ||
  "";

const orderNumber = `JD-${session.id.slice(-6).toUpperCase()}`;

const { data: orderRow, error: orderError } = await supabase
  .from("orders") 
  .insert({
    stripe_session_id: session.id,
    order_number: orderNumber,
    customer_email: customerEmail,
    total_amount: session.amount_total ? session.amount_total / 100 : 0,
    status: "paid",
  })
  .select("id")
  .single();


if (orderError) {
  if (orderError.code === "23505") {
    return res.json({
      success: true,
      message: "Order already recorded",
      orderNumber,
    });
  }

  console.error("Order insert failed:", orderError);
  return res.status(500).json({ error: "Order save failed" });
}

if (!orderRow) {
  return res.status(500).json({ error: "Order save failed" });
}

for (const item of items) {
  await supabase.from("order_items").insert({
  order_id: orderRow.id,
  product_id: item.id || null,
  name: item.name,
  quantity: Number(item.quantity || 1),
  price: Number(item.price || 0),
  item_type: item.item_type || "merch",
  size: item.size || "",
});
}



try {
  const printfulOrder = await createPrintfulOrder({
    orderNumber,

    recipient: {
      name: `${session.metadata?.shipping_first_name || ""} ${session.metadata?.shipping_last_name || ""}`.trim(),
      email: customerEmail,
      address1: session.metadata?.shipping_address1 || "",
      city: session.metadata?.shipping_city || "",
      state_code: session.metadata?.shipping_state_code || "",
      zip: session.metadata?.shipping_zip || "",
      country_code: session.metadata?.shipping_country_code || "US",
    },

    items: items.map((item: any) => ({
      id: item.id,
      name: item.name,
      quantity: Number(item.quantity || 1),
      size: item.size || "One Size",
    })),
  });


  const printfulOrderId =
    printfulOrder?.result?.id ||
    printfulOrder?.result?.order?.id ||
    null;

  if (printfulOrderId) {
    await supabase
      .from("orders")
      .update({
        printful_order_id: String(printfulOrderId),
        shipping_status: "Submitted",
      })
      .eq("id", orderRow.id);
  }
} catch (err) {
  console.error("Printful submission failed:", err);
}


  const itemSummary = items
    .map((item: any) => {
      const qty = Number(item.quantity || 1);
      const name = item.name || "Merch Item";
      return `${qty} × ${name}`;
    })
    .join("<br>");

  
  await sendMerchOrderEmail({
    to: customerEmail,
    orderNumber,
    items: itemSummary,
    total: session.amount_total ? session.amount_total / 100 : 0,
  });

  return res.json({
    success: true,
    message: "Merch order email sent",
    orderNumber,
  });
}

    return res.json({ success: true, message: "No booking update needed" });
  } catch (error) {
    console.error("stripe.webhook.error", error);
    return res.status(500).json({ error: "Webhook failed" });
  }
}