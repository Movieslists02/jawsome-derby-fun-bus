import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

export const handler: Handler = async (event) => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
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
    const payload = JSON.parse(event.body || "{}");

    const orderNumber = payload?.data?.order?.external_id;

    if (!orderNumber) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: "No order number found",
        }),
      };
    }

    const shipment = payload?.data?.shipment || {};

    const supabase = createClient(supabaseUrl, serviceKey);

    const { error } = await supabase
      .from("orders")
      .update({
        shipping_status: shipment.status || payload.type || "Updated",
        tracking_number: shipment.tracking_number || null,
        tracking_url: shipment.tracking_url || null,
        carrier: shipment.carrier || null,
      })
      .eq("order_number", orderNumber);

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Printful webhook error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook failed" }),
    };
  }
};