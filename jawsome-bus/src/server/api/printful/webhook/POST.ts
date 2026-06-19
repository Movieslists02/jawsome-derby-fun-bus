import type { Request, Response } from "express";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request, res: Response) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return res.status(500).json({ error: "Server not configured" });
  }

  const supabase = createClient(
    supabaseUrl,
    serviceKey
  );

  try {
    const payload = req.body;

    console.log(
      "PRINTFUL WEBHOOK",
      JSON.stringify(payload, null, 2)
    );

    const orderId =
      payload?.data?.order?.external_id;

    if (!orderId) {
      return res.json({
        success: true,
        message: "No order id",
      });
    }

    const shipment =
      payload?.data?.shipment || {};

    await supabase
      .from("orders")
      .update({
        shipping_status:
          shipment.status || "Shipped",

        tracking_number:
          shipment.tracking_number || null,

        tracking_url:
          shipment.tracking_url || null,

        carrier:
          shipment.carrier || null,
      })
      .eq("order_number", orderId);

    return res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Webhook failed",
    });
  }
}