import type { Handler } from "@netlify/functions";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const handler: Handler = async (event) => {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!stripeKey || !supabaseUrl || !serviceKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server not configured" }),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const stripe = new Stripe(stripeKey);
    const supabase = createClient(supabaseUrl, serviceKey);
    const body = JSON.parse(event.body || "{}");

    const {
      event_id,
      seats = 1,
      customer_name,
      customer_email,
      customer_phone,
    } = body;

    const { data: eventRow, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", event_id)
      .single();

    if (error || !eventRow) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Event not found" }),
      };
    }

    const seatsRemaining =
      Number(eventRow.total_seats) - Number(eventRow.booked_seats);

    if (seatsRemaining <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Sorry, this event is sold out.",
        }),
      };
    }

    if (Number(seats) > seatsRemaining) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `Only ${seatsRemaining} seats remaining.`,
        }),
      };
    }

    const publicUrl =
      process.env.VITE_PUBLIC_URL ||
      event.headers.origin ||
      "http://localhost:5173";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: customer_email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: eventRow.title },
            unit_amount: Math.round(Number(eventRow.price) * 100),
          },
          quantity: Number(seats),
        },
      ],
      success_url: `${publicUrl}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${publicUrl}/book?event=${eventRow.id}&cancelled=true`,
      metadata: {
        type: "event_booking",
        event_id: eventRow.id,
        event_title: eventRow.title,
        seats: String(seats),
        customer_name: customer_name || "",
        customer_email: customer_email || "",
        customer_phone: customer_phone || "",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error("Booking checkout error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Checkout failed" }),
    };
  }
};