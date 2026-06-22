import type { Handler } from "@netlify/functions";
import Stripe from "stripe";

export const handler: Handler = async (event) => {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Stripe not configured" }),
    };
  }

  const sessionId = event.queryStringParameters?.session_id;

  if (!sessionId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing session_id" }),
    };
  }

  try {
    const stripe = new Stripe(stripeKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return {
      statusCode: 200,
      body: JSON.stringify({
        paid: session.payment_status === "paid",
        session_id: session.id,
        customer_email:
          session.customer_details?.email ||
          session.metadata?.customer_email ||
          "",
        customer_name:
          session.customer_details?.name ||
          session.metadata?.customer_name ||
          "",
        event_title: session.metadata?.event_title || "",
        seats: Number(session.metadata?.seats || 1),
        amount_total: session.amount_total
          ? session.amount_total / 100
          : 0,
      }),
    };
  } catch (error) {
    console.error("Booking verify error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Verification failed" }),
    };
  }
};