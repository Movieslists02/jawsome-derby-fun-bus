import type { Request, Response } from "express";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: Request, res: Response) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const adminCode = process.env.ADMIN_ACCESS_CODE;

  if (!supabaseUrl || !serviceKey) {
    return res.status(500).json({ error: "Server not configured" });
  }

  const { code, event } = req.body;

  if (adminCode && code !== adminCode) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const { error } = await supabase
    .from("events")
    .update({
      total_seats: Number(event.total_seats),
      booked_seats: Number(event.booked_seats),
      status: event.status,
    })
    .eq("id", event.id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json({ success: true });
}