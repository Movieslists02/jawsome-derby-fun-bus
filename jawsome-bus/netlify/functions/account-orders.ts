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

  const email = String(event.queryStringParameters?.email || "")
    .trim()
    .toLowerCase();

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing email" }),
    };
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const { data, error } = await supabase
    .from("orders")
    .select(`
      id,
      order_number,
      customer_email,
      total_amount,
      status,
      shipping_status,
      tracking_number,
      tracking_url,
      carrier,
      created_at,
      order_items (
        name,
        quantity,
        price
      )
    `)
    .eq("customer_email", email)
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