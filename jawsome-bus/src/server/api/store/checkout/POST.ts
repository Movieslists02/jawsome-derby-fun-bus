import type { Request, Response } from "express";
import Stripe from "stripe";


export default async function handler(req: Request, res: Response) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return res.status(500).json({ error: "Stripe not configured" });
  }

  try {
    const stripe = new Stripe(stripeKey);
    const { items, customer_email, email, customer_name, shipping } = req.body;

    const checkoutEmail = customer_email || email || "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!checkoutEmail || !emailRegex.test(checkoutEmail)) {
  return res.status(400).json({
    error: "Please enter a valid email address.",
  });
}

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No items provided" });
    }

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(Number(item.price) * 100),
      },
      quantity: Number(item.quantity || 1),
    }));

    const origin =
      process.env.VITE_PUBLIC_URL ||
      `${req.protocol}://${req.get("host")}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: checkoutEmail || undefined,
      
      line_items,
      success_url: `${origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      metadata: {
        type: "store_order",
        customer_email: checkoutEmail,
        customer_name: customer_name || "",
        shipping_first_name: shipping?.firstName || "",
        shipping_last_name: shipping?.lastName || "",
        shipping_address1: shipping?.address1 || "",
        shipping_city: shipping?.city || "",
        shipping_state_code: shipping?.state_code || "",
        shipping_zip: shipping?.zip || "",
        shipping_country_code: shipping?.country_code || "US",
        items: JSON.stringify(
          items.map((item: any) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size || "",
            item_type: item.item_type || "merch",
            event_id: item.event_id || "",
          }))
        ),
      },
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error("Store checkout error:", error);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}