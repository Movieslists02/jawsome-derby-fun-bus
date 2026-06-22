import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

export const handler: Handler = async (event) => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const adminCode = process.env.ADMIN_ACCESS_CODE;

  if (!supabaseUrl || !serviceKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server not configured" }),
    };
  }

  if (adminCode && event.queryStringParameters?.code !== adminCode) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const { data, error } = await supabase
    .from("orders")
    .select(`
      id,
      stripe_session_id,
      order_number,
      customer_email,
      total_amount,
      status,
      shipping_status,
      printful_order_id,
      tracking_number,
      tracking_url,
      carrier,
      created_at,
      order_items (
        name,
        quantity,
        price,
        item_type
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ orders: data || [] }),
  };
};