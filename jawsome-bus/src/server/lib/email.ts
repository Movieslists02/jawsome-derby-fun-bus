import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.EMAIL_FROM || "Jawsome Racing <onboarding@resend.dev>";
const ADMIN_EMAILS = [
  process.env.ADMIN_EMAIL,
  process.env.OWNER_EMAIL,
].filter((email): email is string => Boolean(email));


export async function sendEventBookingEmail(data: {
  to: string;
  name: string;
  eventTitle: string;
  seats: number;
  total: number;
}) {
  if (!process.env.RESEND_API_KEY || !data.to) return;

  await resend.emails.send({
    from: FROM,
    to: [data.to],
    bcc: ADMIN_EMAILS,
    subject: "Your Jawsome Derby Fun Bus Booking Is Confirmed",
    html: `
      <h2>Your booking is confirmed</h2>
      <p>Hello ${data.name || "Guest"},</p>
      <p>Thank you for booking with Jawsome Derby Fun Bus.</p>
      <p><strong>Event:</strong><br>${data.eventTitle}</p>
      <p><strong>Seats:</strong><br>${data.seats}</p>
      <p><strong>Total:</strong><br>$${data.total}</p>
      <p>We look forward to seeing you on race day.</p>
      <p>Questions? Reply to this email.</p>
      <p><strong>Jawsome Derby Fun Bus</strong></p>
    `,
  });
}

export async function sendMerchOrderEmail(data: {
  to: string;
  orderNumber: string;
  items: string;
  total: number;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return;
  }

  if (!data.to) {
    console.error("Missing customer email for merch email");
    return;
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: [data.to],
      bcc: ADMIN_EMAILS,
      subject: "Your Jawsome Racing Order Confirmation",
      html: `
        <h2>Your order is confirmed</h2>
        <p>Thank you for your purchase.</p>
        <p><strong>Order Number:</strong><br>${data.orderNumber}</p>
        <p><strong>Items:</strong><br>${data.items}</p>
        <p><strong>Total:</strong><br>$${data.total}</p>
        <p>We will notify you when your order ships.</p>
        <p><strong>Jawsome Racing</strong></p>
      `,
    });
  } catch (error) {
    console.error("Merch email failed:", error);
  }
}