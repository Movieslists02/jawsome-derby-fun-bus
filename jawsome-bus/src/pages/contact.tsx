import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Users, ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';


const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };


export default function ContactPage() {
 const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'general', message: '', honeypot: '' });
 const [submitted, setSubmitted] = useState(false);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');


 async function handleSubmit(e: React.FormEvent) {
   e.preventDefault();
   setLoading(true);
   setError('');
   try {
     const res = await fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(form),
     });
     const data = await res.json();
     if (!res.ok) throw new Error(data.error || 'Failed to send');
     setSubmitted(true);
   } catch (err) {
     setError(String(err));
   } finally {
     setLoading(false);
   }
 }


 return (
   <>
     <Helmet>
       <title>Contact — Jawsome Racing</title>
       <meta name="description" content="Get in touch with Jawsome Racing. Group bookings, VIP inquiries, and general questions about the Saratoga Fun Bus Experience." />
     </Helmet>


     {/* Hero */}
     <section className="relative py-24 overflow-hidden">
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url('/assets/hero.jpg')` }}
       />
       <div className="absolute inset-0 bg-black/75" />
       <div className="relative z-10 container mx-auto px-4">
         <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-xl flex flex-col gap-4">
           <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Get in Touch</motion.span>
           <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl text-white leading-none">Contact Us</motion.h1>
           <motion.p variants={fadeUp} className="text-lg text-white/70">
             Questions, group bookings, VIP inquiries — we're here.
           </motion.p>
         </motion.div>
       </div>
     </section>


     <section className="py-20 bg-background">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl">


           {/* Contact info */}
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={stagger}
             className="flex flex-col gap-6"
           >
             <motion.div variants={fadeUp}>
               <h2 className="font-heading text-2xl text-foreground">Reach Out</h2>
               <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                 Whether you're booking for a group, asking about VIP packages, or just want to know more — we'd love to hear from you.
               </p>
             </motion.div>


             {[
               { icon: Mail, label: 'Email', value: 'info@jawsomeracing.com', href: 'mailto:info@jawsomeracing.com' },
               { icon: Phone, label: 'Phone', value: '(516) 360-7101', href: 'tel:5163607101' },
               {
  icon: Users,
  label: 'Kentucky Derby 2027',
  value: 'Questions about packages, seating options, pricing or payment plans',
  href: null,
}
             ].map((item) => (
               <motion.div key={item.label} variants={fadeUp} className="flex items-start gap-4">
                 <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                   <item.icon size={16} className="text-primary" />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                   {item.href ? (
                     <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">{item.value}</a>
                   ) : (
                     <p className="text-sm text-foreground">{item.value}</p>
                   )}
                 </div>
               </motion.div>
             ))}


             <motion.div variants={fadeUp} className="pt-4 border-t border-border">
               <p className="text-xs text-muted-foreground mb-3">Ready to book?</p>
               <Link
                 to="/book"
                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black font-bold text-xs uppercase tracking-wider rounded transition-all hover:brightness-110"
               >
                 Book Now <ArrowRight size={12} />
               </Link>
             </motion.div>
           </motion.div>


           {/* Contact form */}
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="lg:col-span-2"
           >
             <div className="bg-card border border-border rounded-lg p-8">
               {submitted ? (
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center text-center gap-4 py-8"
                 >
                   <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                     <MessageSquare size={28} className="text-primary" />
                   </div>
                   <h3 className="font-heading text-2xl text-foreground">Message Received!</h3>
                   <p className="text-muted-foreground text-sm max-w-sm">
                     Thanks for reaching out. We'll get back to you within 24 hours.
                   </p>
                   <Link
                     to="/book"
                     className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider rounded transition-all hover:brightness-110"
                   >
                     Book Your Spot <ArrowRight size={14} />
                   </Link>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                   <h3 className="font-heading text-xl text-foreground">Send a Message</h3>


                   {/* Honeypot — hidden from real users, bots fill it */}
                   <input
                     type="text"
                     name="honeypot"
                     value={form.honeypot}
                     onChange={(e) => setForm((f) => ({ ...f, honeypot: e.target.value }))}
                     style={{ display: 'none' }}
                     tabIndex={-1}
                     autoComplete="off"
                   />


                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div className="flex flex-col gap-1.5">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name *</label>
                       <input
                         type="text"
                         required
                         value={form.name}
                         onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                         placeholder="Your name"
                         className="bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                       />
                     </div>
                     <div className="flex flex-col gap-1.5">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email *</label>
                       <input
                         type="email"
                         required
                         value={form.email}
                         onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                         placeholder="your@email.com"
                         className="bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                       />
                     </div>
                   </div>


                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div className="flex flex-col gap-1.5">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                       <input
                         type="tel"
                         value={form.phone}
                         onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                         placeholder="(555) 000-0000"
                         className="bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                       />
                     </div>
                     <div className="flex flex-col gap-1.5">
                       <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                       <select
  value={form.subject}
  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
  className="bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
>
  <option value="general">General Inquiry</option>

  <option value="derby-general">
    Kentucky Derby 2027 Information
  </option>

  <option value="derby-group">
    Kentucky Derby Group Booking
  </option>

  <option value="derby-payment">
    Kentucky Derby Payment Plan
  </option>

  <option value="group">
    Group Booking (8+)
  </option>

  <option value="vip">
    VIP Package
  </option>

  <option value="stable">
    Racing Stable / Investment
  </option>

  <option value="merch">
    Merch / Apparel
  </option>
</select>
                     </div>
                   </div>


                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message *</label>
                     <textarea
                       required
                       rows={5}
                       value={form.message}
                       onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                       placeholder="Tell us what you're looking for..."
                       className="bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                     />
                   </div>


                   {error && (
                     <div className="text-sm text-red-400 bg-muted border border-border rounded px-4 py-3">
                       {error}
                     </div>
                   )}


                   <button
                     type="submit"
                     disabled={loading}
                     className="inline-flex items-center justify-center gap-2 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                   >
                     {loading ? 'Sending...' : <><span>Send Message</span><ArrowRight size={16} /></>}
                   </button>
                 </form>
               )}
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   </>
 );
}