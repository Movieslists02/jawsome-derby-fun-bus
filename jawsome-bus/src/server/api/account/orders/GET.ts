import type { Request, Response } from "express";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: Request, res: Response) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return res.status(500).json({ error: "Server not configured" });
  }

  const email = String(req.query.email || "").trim().toLowerCase();

  if (!email) {
    return res.status(400).json({ error: "Missing email" });
  }

  const supabase = createClient(supabaseUrl, serviceKey);

 const { data, error } = await supabase
  .from("orders")
  .select(`
      id,
  order_number,
  stripe_session_id,
  customer_email,
  total_amount,
  status,
  created_at,
  order_items (
    name,
    quantity,
    price
    )
  `)
  .eq("customer_email", email)
  .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  return res.json({ orders: data || [] });
}