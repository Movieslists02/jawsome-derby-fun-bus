import type { Request, Response } from 'express';
import { sendEmail } from '../../email.js';


interface ContactBody {
 name: string;
 email: string;
 phone?: string;
 subject: string;
 message: string;
 honeypot?: string; // hidden field — bots fill it, humans don't
}


// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;


function isRateLimited(ip: string): boolean {
 const now = Date.now();
 const entry = rateLimitMap.get(ip);
 if (!entry || now > entry.resetAt) {
   rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
   return false;
 }
 if (entry.count >= RATE_LIMIT) return true;
 entry.count++;
 return false;
}


const SUBJECT_LABELS: Record<string, string> = {
  general: 'General Inquiry',

  'derby-general': 'Kentucky Derby 2027 Information',
  'derby-group': 'Kentucky Derby Group Booking',
  'derby-payment': 'Kentucky Derby Payment Plan',

  group: 'Group Booking (8+)',
  vip: 'VIP Package',
  stable: 'Racing Stable / Investment',
  merch: 'Merch / Apparel',
};


export default async function handler(req: Request, res: Response) {
 const { name, email, phone, subject, message, honeypot } = req.body as ContactBody;


 // Honeypot — bots fill hidden fields
 if (honeypot) {
   return res.status(200).json({ ok: true }); // silently discard
 }


 // Basic validation
 if (!name?.trim() || !email?.trim() || !message?.trim()) {
   return res.status(400).json({ error: 'Missing required fields' });
 }


 // Email format check
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(email)) {
   return res.status(400).json({ error: 'Invalid email address' });
 }


 // Length limits to block spam walls of text
 if (name.length > 100 || email.length > 200 || message.length > 3000) {
   return res.status(400).json({ error: 'Input too long' });
 }


 // Rate limiting by IP
 const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.ip || 'unknown';
 if (isRateLimited(ip)) {
   return res.status(429).json({ error: 'Too many submissions. Please wait a few minutes.' });
 }


 const recipient = process.env.CONTACT_FORM_RECIPIENT_EMAIL ?? 'jawsomederbyfunbus1234@gmail.com';


 const subjectLabel = SUBJECT_LABELS[subject] ?? subject ?? 'General Inquiry';


 const htmlBody = `
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 32px; border-radius: 8px;">
     <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 16px; margin-bottom: 24px;">
       <h1 style="color: #C9A84C; font-size: 22px; margin: 0;">New Contact Form Submission</h1>
       <p style="color: #888; font-size: 13px; margin: 4px 0 0;">Jawsome Derby Fun Bus — jawsomederbyfunbus.com</p>
     </div>


     <table style="width: 100%; border-collapse: collapse;">
       <tr>
         <td style="padding: 8px 0; color: #888; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
         <td style="padding: 8px 0; color: #f5f5f5; font-size: 14px;">${escapeHtml(name)}</td>
       </tr>
       <tr>
         <td style="padding: 8px 0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
         <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #C9A84C;">${escapeHtml(email)}</a></td>
       </tr>
       ${phone ? `<tr>
         <td style="padding: 8px 0; color: #888; font-size: 13px; vertical-align: top;">Phone</td>
         <td style="padding: 8px 0; color: #f5f5f5; font-size: 14px;"><a href="tel:${escapeHtml(phone)}" style="color: #C9A84C;">${escapeHtml(phone)}</a></td>
       </tr>` : ''}
       <tr>
         <td style="padding: 8px 0; color: #888; font-size: 13px; vertical-align: top;">Subject</td>
         <td style="padding: 8px 0; color: #f5f5f5; font-size: 14px;">${escapeHtml(subjectLabel)}</td>
       </tr>
     </table>


     <div style="margin-top: 24px; padding: 16px; background: #1a1a1a; border-left: 3px solid #C9A84C; border-radius: 4px;">
       <p style="color: #888; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
       <p style="color: #f5f5f5; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
     </div>


     <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #222;">
       <p style="color: #555; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
     </div>
   </div>
 `;


 try {
   await sendEmail({
     to: recipient,
     replyTo: email,
     subject: `[Jawsome Racing] ${subjectLabel} from ${name}`,
     html: htmlBody,
   });


   res.status(200).json({ ok: true });
 } catch (err) {
   console.error('contact.email.error', err);
   res.status(500).json({ error: 'Failed to send message. Please try again or call us directly.' });
 }
}


function escapeHtml(str: string): string {
 return str
   .replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&#039;');
}