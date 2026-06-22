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

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    if (adminCode && body.code !== adminCode) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Unauthorized" }),
      };
    }

    const { event: eventRow } = body;

    if (!eventRow?.id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing event data" }),
      };
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    const { error } = await supabase
      .from("events")
      .update({
        total_seats: Number(eventRow.total_seats),
        booked_seats: Number(eventRow.booked_seats),
        status: eventRow.status,
      })
      .eq("id", eventRow.id);

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
    console.error("Admin events error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Admin event update failed" }),
    };
  }
};