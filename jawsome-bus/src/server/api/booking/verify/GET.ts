import type { Request, Response } from 'express';



export default async function handler(req: Request, res: Response) {
 const stripeKey = process.env.STRIPE_SECRET_KEY;
 const sessionId = req.query.session_id as string;


 if (!stripeKey) {
   return res.status(503).json({ error: 'stripe_not_configured' });
 }
 if (!sessionId) {
   return res.status(400).json({ error: 'Missing session_id' });
 }


 try {
   const Stripe = (await import('stripe')).default;
   const stripe = new Stripe(stripeKey as string, { apiVersion: '2026-04-22.dahlia' });


   const session = await stripe.checkout.sessions.retrieve(sessionId);


   res.json({
     status: session.payment_status,
     customerEmail: session.customer_email,
     metadata: session.metadata,
     amountTotal: session.amount_total,
   });
 } catch (err) {
   console.error('stripe.verify.error', err);
   res.status(500).json({ error: 'Failed to verify session' });
 }
}