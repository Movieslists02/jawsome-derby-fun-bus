import type { Request, Response } from "express";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: Request, res: Response) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const adminCode = process.env.ADMIN_ACCESS_CODE;

  if (!supabaseUrl || !serviceKey) {
    return res.status(500).json({ error: "Server not configured" });
  }

  if (adminCode && req.query.code !== adminCode) {
    return res.status(401).json({ error: "Unauthorized" });
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
    return res.status(500).json({ error: error.message });
  }

  return res.json({ orders: data || [] });
}