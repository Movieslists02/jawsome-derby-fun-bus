import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { CheckCircle, Star, ArrowRight, AlertCircle, Users, ChevronDown } from 'lucide-react';
import { EVENTS, type RaceEvent } from '@/lib/events-data';
import { supabase } from "@/lib/supabase";


type Step = 'event' | 'package' | 'details' | 'checkout';


interface FormData {
 eventId: string;
 packageType: 'standard' | 'vip';
 quantity: number;
 customerName: string;
 customerEmail: string;
 customerPhone: string;
}


const fadeUp = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};


export default function BookPage() {
 const [searchParams] = useSearchParams();
 const cancelled = searchParams.get('cancelled') === 'true';
 const preselectedEvent = searchParams.get('event') ?? '';


 const [step, setStep] = useState<Step>(preselectedEvent ? 'package' : 'event');
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');
 const [stripeUnconfigured, setStripeUnconfigured] = useState(false);
 const [liveSeats, setLiveSeats] = useState<Record<string, number>>({});


 const [form, setForm] = useState<FormData>({
   eventId: preselectedEvent,
   packageType: 'standard',
   quantity: 1,
   customerName: '',
   customerEmail: '',
   customerPhone: '',
 });

useEffect(() => {
  async function loadSeats() {
    const { data, error } = await supabase
      .from("events")
      .select("id, total_seats, booked_seats");

    if (error) {
      console.error("Failed to load booking seats:", error);
      return;
    }

    const seatMap: Record<string, number> = {};

    data?.forEach((event) => {
      seatMap[event.id] = Number(event.total_seats) - Number(event.booked_seats);
    });

    setLiveSeats(seatMap);
  }

  loadSeats();
}, []);



 const selectedEvent = EVENTS.find((e) => e.id === form.eventId);

 const selectedSeatsLeft = selectedEvent
  ? liveSeats[selectedEvent.id] ?? selectedEvent.seatsLeft
  : 0;

const selectedSoldOut = selectedSeatsLeft <= 0;




 const steps: { key: Step; label: string }[] = [
   { key: 'event', label: 'Event' },
   { key: 'package', label: 'Package' },
   { key: 'details', label: 'Your Info' },
   { key: 'checkout', label: 'Review' },
 ];
 const stepIndex = steps.findIndex((s) => s.key === step);


 function selectEvent(event: RaceEvent) {
   setForm((f) => ({ ...f, eventId: event.id }));
   setStep('package');
 }


 function selectPackage(pkg: 'standard' | 'vip') {
   setForm((f) => ({ ...f, packageType: pkg }));
   setStep('details');
 }


 function handleDetailsSubmit(e: React.FormEvent) {
   e.preventDefault();
   if (!form.customerName || !form.customerEmail) return;
   setStep('checkout');
 }


 async function handleCheckout() {
   if (!selectedEvent) return;
   if (selectedSoldOut) {
  setError("Sorry, this event is sold out.");
  return;
}

if (form.quantity > selectedSeatsLeft) {
  setError(`Only ${selectedSeatsLeft} seats remaining.`);
  return;
}
   setLoading(true);
   setError('');
   try {
     const res = await fetch('/api/booking/checkout', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
       event_id: form.eventId,
       seats: form.quantity,
       customer_name: form.customerName,
       customer_email: form.customerEmail,
       customer_phone: form.customerPhone,
}),
     });
     const data = await res.json();
     if (data.error === 'stripe_not_configured') {
       setStripeUnconfigured(true);
       setLoading(false);
       return;
     }
     if (!res.ok || !data.url) throw new Error(data.message || 'Checkout failed');
     window.location.href = data.url;
   } catch (err) {
     setError(String(err));
     setLoading(false);
   }
 }


 const unitPrice = form.packageType === 'vip'
   ? (selectedEvent?.vipPrice ?? 295)
   : (selectedEvent?.price ?? 195);
 const total = unitPrice * form.quantity;


 return (
   <>
     <Helmet>
       <title>Book Your Spot — Jawsome Racing</title>
       <meta name="description" content="Reserve your seat on the Jawsome Racing Fun Bus to Saratoga. Limited spots available." />
     </Helmet>


     <div className="min-h-screen bg-background py-16 px-4">
       <div className="container mx-auto max-w-3xl">


         {/* Cancelled notice */}
         {cancelled && (
           <motion.div
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-8 flex items-center gap-3 bg-muted border border-border rounded-lg px-5 py-4 text-sm text-muted-foreground"
           >
             <AlertCircle size={16} className="text-primary shrink-0" />
             Your booking was cancelled. No charge was made — you can start again below.
           </motion.div>
         )}


         {/* Header */}
         <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10">
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Secure Your Seat</span>
           <h1 className="font-heading text-4xl md:text-5xl text-foreground mt-2 leading-none">Book Your Spot</h1>
           <p className="text-muted-foreground mt-2">Limited seats per event — don't wait.</p>
         </motion.div>


         {/* Step indicator */}
         <div className="flex items-center gap-0 mb-10">
           {steps.map((s, i) => (
             <div key={s.key} className="flex items-center flex-1">
               <div className={`flex items-center gap-2 ${i <= stepIndex ? 'text-primary' : 'text-muted-foreground'}`}>
                 <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
                   i < stepIndex ? 'bg-primary border-primary text-black' :
                   i === stepIndex ? 'border-primary text-primary' :
                   'border-border text-muted-foreground'
                 }`}>
                   {i < stepIndex ? '✓' : i + 1}
                 </div>
                 <span className="text-xs font-semibold uppercase tracking-wider hidden sm:block">{s.label}</span>
               </div>
               {i < steps.length - 1 && (
                 <div className={`flex-1 h-px mx-3 transition-colors ${i < stepIndex ? 'bg-primary' : 'bg-border'}`} />
               )}
             </div>
           ))}
         </div>


         {/* ── STEP 1: Event ── */}
         {step === 'event' && (
           <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-4">
             <h2 className="font-heading text-2xl text-foreground">Choose Your Event</h2>
             {EVENTS.map((event) => {
  const eventSeatsLeft = liveSeats[event.id] ?? event.seatsLeft;
  const isSoldOut = eventSeatsLeft <= 0;

  return (
    <button
      key={event.id}
      disabled={isSoldOut}
      onClick={() => !isSoldOut && selectEvent(event)}
      className={`group text-left bg-card border border-border rounded-lg overflow-hidden transition-all ${
        isSoldOut
          ? "opacity-60 cursor-not-allowed"
          : "hover:border-primary hover:shadow-lg hover:shadow-primary/10"
      }`}
    >
                 <div className="flex flex-col sm:flex-row">
                   <div className="relative sm:w-48 h-36 sm:h-auto shrink-0 overflow-hidden">
                     <img src={event.imgSlot} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/30" />
                     {event.badge && (
                       <span className="absolute top-2 left-2 text-xs font-bold uppercase tracking-wider bg-primary text-black px-2 py-0.5 rounded">
                         {event.badge}
                       </span>
                     )}
                   </div>
                   <div className="p-5 flex flex-col gap-2 flex-1">
                     <div className="flex items-start justify-between gap-3">
                       <h3 className="font-heading text-xl text-foreground leading-tight">{event.title}</h3>
                       <span className="font-heading text-2xl text-primary shrink-0">${event.price}</span>
                     </div>
                     <p className="text-xs text-primary font-semibold uppercase tracking-wider">{event.dateDisplay}</p>
                     <p className="text-sm text-muted-foreground">{event.description}</p>
                     <div className="flex items-center gap-2 mt-1">
                       <Users size={13} className="text-muted-foreground" />
                       <span className={`text-xs font-semibold ${(liveSeats[event.id] ?? event.seatsLeft) <= 10 ? 'text-red-400' : 'text-muted-foreground'}`}>
                         {liveSeats[event.id] ?? event.seatsLeft} seats left
                       </span>
                       <span className="ml-auto text-xs text-primary font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1">
                         {isSoldOut ? "SOLD OUT" : <>Select <ArrowRight size={12} /></>}
                       </span>
                     </div>
                   </div>
                 </div>
               </button>
  );
})}
           </motion.div>
         )}


         {/* ── STEP 2: Package ── */}
         {step === 'package' && selectedEvent && (
           <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-6">
             <div>
               <button onClick={() => setStep('event')} className="text-xs text-muted-foreground hover:text-primary transition-colors mb-3">← Back to events</button>
               <h2 className="font-heading text-2xl text-foreground">Choose Your Package</h2>
               <p className="text-sm text-muted-foreground mt-1">{selectedEvent.title} · {selectedEvent.dateDisplay}</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               {/* Standard */}
               <button
                 onClick={() => selectPackage('standard')}
                 className="group text-left bg-card border border-border hover:border-primary rounded-lg p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:shadow-primary/10"
               >
                 <div>
                   <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Standard</span>
                   <h3 className="font-heading text-2xl text-foreground mt-1">The Full Experience</h3>
                 </div>
                 <ul className="flex flex-col gap-2">
                   {['Round trip bus transportation', 'Racetrack admission', 'Food & drinks on board'].map((item) => (
                     <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                       <CheckCircle size={14} className="text-primary shrink-0" /> {item}
                     </li>
                   ))}
                 </ul>
                 <div className="mt-auto flex items-end justify-between">
                   <span className="font-heading text-3xl text-foreground">${selectedEvent.price}</span>
                   <span className="text-xs text-primary font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1">Select <ArrowRight size={12} /></span>
                 </div>
               </button>


               {/* VIP */}
               <button
                 onClick={() => selectPackage('vip')}
                 className="group text-left bg-card border-2 border-primary rounded-lg p-6 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20"
               >
                 <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl">VIP</div>
                 <div>
                   <span className="text-xs font-bold uppercase tracking-widest text-primary">Premium</span>
                   <h3 className="font-heading text-2xl text-foreground mt-1">VIP Package</h3>
                 </div>
                 <ul className="flex flex-col gap-2">
                   {['Everything in Standard', 'Priority seating on the bus', 'Premium race day experience', 'Exclusive VIP treatment'].map((item) => (
                     <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                       <Star size={14} className="text-primary shrink-0" /> {item}
                     </li>
                   ))}
                 </ul>
                 <p className="text-xs font-bold text-primary uppercase tracking-wider">⚡ Spots sell out fast</p>
                 <div className="mt-auto flex items-end justify-between">
                   <span className="font-heading text-3xl text-foreground">${selectedEvent.vipPrice}</span>
                   <span className="text-xs text-primary font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1">Select <ArrowRight size={12} /></span>
                 </div>
               </button>
             </div>
           </motion.div>
         )}


         {/* ── STEP 3: Details ── */}
         {step === 'details' && selectedEvent && (
           <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-6">
             <div>
               <button onClick={() => setStep('package')} className="text-xs text-muted-foreground hover:text-primary transition-colors mb-3">← Back to packages</button>
               <h2 className="font-heading text-2xl text-foreground">Your Information</h2>
               <p className="text-sm text-muted-foreground mt-1">{selectedEvent.title} · {form.packageType === 'vip' ? 'VIP Package' : 'Standard Package'}</p>
             </div>


             <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-5">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                   <input
                     type="text"
                     required
                     value={form.customerName}
                     onChange={(e) => setForm((f) => ({ ...f, customerName: e.target.value }))}
                     placeholder="John Smith"
                     className="bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                   />
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email *</label>
                   <input
                     type="email"
                     required
                     value={form.customerEmail}
                     onChange={(e) => setForm((f) => ({ ...f, customerEmail: e.target.value }))}
                     placeholder="john@example.com"
                     className="bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                   />
                 </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</label>
                   <input
                     type="tel"
                     value={form.customerPhone}
                     onChange={(e) => setForm((f) => ({ ...f, customerPhone: e.target.value }))}
                     placeholder="(555) 000-0000"
                     className="bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                   />
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Number of Seats</label>
                   <div className="relative">
  <select
    value={form.quantity}
    onChange={(e) => setForm((f) => ({ ...f, quantity: Number(e.target.value) }))}
    disabled={selectedSoldOut}
    className="w-full appearance-none bg-card border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors pr-10 disabled:opacity-60 disabled:cursor-not-allowed"
  >
    {Array.from(
      { length: Math.max(1, Math.min(selectedSeatsLeft, 8)) },
      (_, i) => i + 1
    ).map((n) => (
      <option key={n} value={n}>
        {n} {n === 1 ? "seat" : "seats"}
      </option>
    ))}
  </select>

  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
</div></div>
               </div>


               {/* Order summary */}
               <div className="bg-muted border border-border rounded-lg p-5 flex flex-col gap-2 mt-2">
                 <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Order Summary</h4>
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">{selectedEvent.title}</span>
                   <span className="text-foreground">{form.packageType === 'vip' ? 'VIP' : 'Standard'}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">${unitPrice} × {form.quantity} seat{form.quantity > 1 ? 's' : ''}</span>
                   <span className="text-foreground">${total}</span>
                 </div>
                 <div className="border-t border-border mt-2 pt-2 flex justify-between font-bold">
                   <span className="text-foreground">Total</span>
                   <span className="text-primary font-heading text-xl">${total}</span>
                 </div>
               </div>


               <button
                 type="submit"
                 className="inline-flex items-center justify-center gap-2 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-[1.02]"
               >
                 Continue to Review <ArrowRight size={16} />
               </button>
             </form>
           </motion.div>
         )}


         {/* ── STEP 4: Review & Checkout ── */}
         {step === 'checkout' && selectedEvent && (
           <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-6">
             <div>
               <button onClick={() => setStep('details')} className="text-xs text-muted-foreground hover:text-primary transition-colors mb-3">← Back to details</button>
               <h2 className="font-heading text-2xl text-foreground">Review Your Order</h2>
             </div>


             <div className="bg-card border border-border rounded-lg divide-y divide-border">
               <div className="p-5 flex flex-col gap-1">
                 <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Event</span>
                 <p className="text-foreground font-semibold">{selectedEvent.title}</p>
                 <p className="text-sm text-primary">{selectedEvent.dateDisplay}</p>
               </div>
               <div className="p-5 flex flex-col gap-1">
                 <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Package</span>
                 <p className="text-foreground font-semibold">{form.packageType === 'vip' ? 'VIP Package' : 'Standard Package'}</p>
               </div>
               <div className="p-5 flex flex-col gap-1">
                 <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Guest</span>
                 <p className="text-foreground font-semibold">{form.customerName}</p>
                 <p className="text-sm text-muted-foreground">{form.customerEmail}</p>
                 {form.customerPhone && <p className="text-sm text-muted-foreground">{form.customerPhone}</p>}
               </div>
               <div className="p-5 flex items-center justify-between">
                 <div>
                   <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Total</span>
                   <p className="text-sm text-muted-foreground">{form.quantity} seat{form.quantity > 1 ? 's' : ''} × ${unitPrice}</p>
                 </div>
                 <span className="font-heading text-3xl text-primary">${total}</span>
               </div>
             </div>


             {stripeUnconfigured && (
               <div className="flex items-start gap-3 bg-muted border border-border rounded-lg p-4 text-sm text-muted-foreground">
                 <AlertCircle size={16} className="text-primary shrink-0 mt-0.5" />
                 <div>
                   <p className="font-semibold text-foreground">Payment not yet configured</p>
                   <p className="mt-0.5">Add your Stripe API keys in Settings → Secrets to enable live payments. Your booking details are ready to go.</p>
                 </div>
               </div>
             )}


             {error && (
               <div className="flex items-center gap-3 bg-muted border border-border rounded-lg p-4 text-sm text-red-400">
                 <AlertCircle size={16} className="shrink-0" /> {error}
               </div>
             )}


             <button
  onClick={handleCheckout}
  disabled={loading || selectedSoldOut}
  className="inline-flex items-center justify-center gap-2 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
>
  {selectedSoldOut ? (
    "Sold Out"
  ) : loading ? (
    "Redirecting to payment..."
  ) : (
    <>
      <span>Confirm & Pay ${total}</span>
      <ArrowRight size={16} />
    </>
  )}
</button>
             <p className="text-xs text-muted-foreground text-center">Secure checkout powered by Stripe. Your card details are never stored on our servers.</p>
           </motion.div>
         )}
       </div>
     </div>
   </>
 );
}