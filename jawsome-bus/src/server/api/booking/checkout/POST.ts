import type { Request, Response } from "express";
import Stripe from "stripe";
import { supabase } from "../../../../lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request, res: Response) {
  try {
    const {
      event_id,
      seats = 1,
      customer_name,
      customer_email,
      customer_phone,
    } = req.body;

    const checkoutEmail = customer_email || "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!checkoutEmail || !emailRegex.test(checkoutEmail)) {
      return res.status(400).json({
        error: "Please enter a valid email address.",
      });
    }

    const { data: event, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", event_id)
      .single();

    if (error || !event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const seatsRemaining =
      Number(event.total_seats) - Number(event.booked_seats);

    if (seatsRemaining <= 0) {
      return res.status(400).json({
        error: "Sorry, this event is sold out.",
      });
    }

    if (Number(seats) > seatsRemaining) {
      return res.status(400).json({
        error: `Only ${seatsRemaining} seats remaining.`,
      });
    }

    const publicUrl =
      process.env.VITE_PUBLIC_URL ||
      "http://localhost:5173";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: checkoutEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: event.title },
            unit_amount: Math.round(Number(event.price) * 100),
          },
          quantity: Number(seats),
        },
      ],
      success_url: `${publicUrl}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${publicUrl}/book?event=${event.id}&cancelled=true`,
      metadata: {
        type: "event_booking",
        event_id: event.id,
        event_title: event.title,
        seats: String(seats),
        customer_name: customer_name || "",
        customer_email: checkoutEmail,
        customer_phone: customer_phone || "",
      },
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error("Booking checkout error:", err);
    return res.status(500).json({ error: "Checkout failed" });
  }
}