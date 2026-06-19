// src/server/lib/printful.ts

export const PRINTFUL_VARIANTS: Record<string, number> = {
  "race-day-hoodie:S": 5360139947,
  "race-day-hoodie:M": 5360139948,
  "race-day-hoodie:L": 5360139949,
  "race-day-hoodie:XL": 5360139951,
  "race-day-hoodie:2XL": 5360139952,

  "ladies-pink-tee:S": 5360136528,
  "ladies-pink-tee:M": 5360136529,
  "ladies-pink-tee:L": 5360136530,
  "ladies-pink-tee:XL": 5360136531,
  "ladies-pink-tee:2XL": 5360136532,

  "slogan-tee:S": 5360141660,
  "slogan-tee:M": 5360141661,
  "slogan-tee:L": 5360141662,
  "slogan-tee:XL": 5360141663,
  "slogan-tee:2XL": 5360141664,

  "racing-cap:Black": 5360135415,
  "racing-cap:White": 5360135416,
  "racing-cap:One Size": 5360135415,
};

type PrintfulOrderItem = {
  id: string;
  name: string;
  quantity: number;
  size?: string;
};

type PrintfulRecipient = {
  name: string;
  email: string;
  phone?: string;
  address1: string;
  address2?: string;
  city: string;
  state_code?: string;
  country_code: string;
  zip: string;
};

export async function createPrintfulOrder(data: {
  orderNumber: string;
  recipient: PrintfulRecipient;
  items: PrintfulOrderItem[];
}) {
  const apiKey = process.env.PRINTFUL_API_KEY;

  if (!apiKey) {
    throw new Error("Missing PRINTFUL_API_KEY");
  }

  const printfulItems = data.items.map((item) => {
    const size = item.size || "One Size";
    const key = `${item.id}:${size}`;
    const syncVariantId = PRINTFUL_VARIANTS[key];

    if (!syncVariantId) {
      throw new Error(`Missing Printful variant for ${key}`);
    }

    return {
      sync_variant_id: syncVariantId,
      quantity: Number(item.quantity || 1),
    };
  });

  const response = await fetch("https://api.printful.com/orders", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      external_id: data.orderNumber,
      recipient: {
        name: data.recipient.name,
        email: data.recipient.email,
        phone: data.recipient.phone || "",
        address1: data.recipient.address1,
        address2: data.recipient.address2 || "",
        city: data.recipient.city,
        state_code: data.recipient.state_code || "",
        country_code: data.recipient.country_code,
        zip: data.recipient.zip,
      },
      items: printfulItems,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Printful order failed:", result);
    throw new Error(result?.result || result?.error?.message || "Printful order failed");
  }

  return result;
}