import { motion } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { CheckCircle, Star, Users, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const fadeUp = {
 hidden: { opacity: 0, y: 32 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};


const stagger = {
 hidden: {},
 visible: { transition: { staggerChildren: 0.15 } },
};


const EVENTS = [
 {
   id: 'opening-weekend-2026',
   title: 'Saratoga Opening Weekend',
   price: '$195',
   desc: 'Kick off the season right. Opening weekend energy is unmatched — the crowds, the fashion, the racing.',
   badge: 'Most Popular',
   img: '/assets/event-opening.jpg',
 },
 {
   id: 'travers-stakes-2026',
   title: 'Travers Stakes Weekend',
   price: '$195',
   desc: 'The Midsummer Derby. One of the most prestigious races of the season — a bucket-list experience.',
   badge: 'Selling Fast',
   img: '/assets/event-travers.jpg',
 },
 {
   id: 'special-event-aug8',
   title: 'Special Event Days',
   price: '$195',
   desc: 'Themed race days, hat contests, and exclusive events throughout the Saratoga season.',
   badge: null,
   img: '/assets/event-special.jpg',
 },
];


export default function HomePage() {
 return (
   <>
     <Helmet>
       <title>Jawsome Racing — Saratoga Derby Fun Bus Experience</title>
       <meta
         name="description"
         content="Round trip transportation, food, drinks & racetrack admission. Book your spot on the Jawsome Racing Fun Bus to Saratoga. Limited seats per event."
       />
     </Helmet>


     {/* ─── HERO ─────────────────────────────────────────────── */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url('/assets/hero.jpg')` }}
       />
       
       <div className="absolute inset-0 bg-black/60" />
       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />


       <div className="relative z-10 container mx-auto px-4 py-24 text-center">
         <motion.div
           initial="hidden"
           animate="visible"
           variants={stagger}
           className="flex flex-col items-center gap-6"
         >
           <motion.span
             variants={fadeUp}
             className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary border border-primary/40 px-4 py-1.5 rounded-full"
           >
             Limited Seats Per Event
           </motion.span>


           <motion.h1
             variants={fadeUp}
             className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-wide max-w-5xl"
           >
             Saratoga Derby<br />
             <span className="text-primary">Fun Bus</span> Experience
           </motion.h1>


           <motion.p
             variants={fadeUp}
             className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
           >
             Round trip transportation, food, drinks &amp; racetrack admission
           </motion.p>


           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-2">
             <Link
               to="/book"
               className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-105 shadow-lg shadow-primary/20"
             >
               Book Your Spot
               <ArrowRight size={16} />
             </Link>
             <Link
               to="/events"
               className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded transition-all hover:border-primary hover:text-primary"
             >
               View Events
             </Link>
           </motion.div>
         </motion.div>
       </div>


       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
         <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary" />
       </div>
     </section>


     {/* ─── PROMO BAR ────────────────────────────────────────── */}
     <div className="bg-primary/10 border-y border-primary/20 py-4">
       <div className="container mx-auto px-4 text-center">
         <p className="text-primary font-bold text-sm uppercase tracking-widest">
           🏆 10% Off Early Bird Booking – Limited Time
         </p>
       </div>
     </div>


     {/* ─── EVENTS ───────────────────────────────────────────── */}
     <section id="events" className="py-24 bg-background">
       <div className="container mx-auto px-4">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="flex flex-col gap-16"
         >
           <motion.div variants={fadeUp} className="max-w-xl">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Reserve Your Seat</span>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-2 leading-none">
               Choose Your Event
             </h2>
             <p className="text-muted-foreground mt-3">
               Select the race day that works for you. Spots fill fast — don't wait.
             </p>
           </motion.div>


           <motion.div
             variants={stagger}
             className="grid grid-cols-1 md:grid-cols-3 gap-6"
           >
             {EVENTS.map((event) => (
               <motion.div
                 key={event.id}
                 variants={fadeUp}
                 whileHover={{ y: -6, transition: { duration: 0.2 } }}
                 className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
               >
                 <div className="relative h-48 overflow-hidden">
                   <img
                     src={event.img}
                     alt={event.title}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                   {event.badge && (
                     <span className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider bg-primary text-black px-2.5 py-1 rounded">
                       {event.badge}
                     </span>
                   )}
                 </div>


                 <div className="p-6 flex flex-col gap-3">
                   <h3 className="font-heading text-2xl text-foreground leading-tight">{event.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                   <div className="flex items-center justify-between mt-2">
                     <span className="font-heading text-3xl text-primary">{event.price}</span>
                     <span className="text-xs text-muted-foreground">per person</span>
                   </div>
                   <Link
                     to={`/book?event=${event.id}`}
                     className="mt-1 inline-flex items-center justify-center gap-2 w-full py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider rounded transition-all hover:brightness-110 hover:scale-[1.02]"
                   >
                     Reserve Spot
                     <ArrowRight size={14} />
                   </Link>
                 </div>
               </motion.div>
             ))}
           </motion.div>
         </motion.div>
       </div>
     </section>


     {/* ─── PACKAGES ─────────────────────────────────────────── */}
     <section id="packages" className="py-24 bg-muted">
       <div className="container mx-auto px-4">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="flex flex-col gap-14"
         >
           <motion.div variants={fadeUp} className="max-w-xl">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Pick Your Level</span>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-2 leading-none">
               Choose Your Experience
             </h2>
           </motion.div>


           <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
             {/* Standard */}
             <motion.div
               variants={fadeUp}
               whileHover={{ y: -4, transition: { duration: 0.2 } }}
               className="bg-card border border-border rounded-lg p-8 flex flex-col gap-6"
             >
               <div>
                 <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Standard</span>
                 <h3 className="font-heading text-3xl text-foreground mt-1">The Full Experience</h3>
               </div>
               <ul className="flex flex-col gap-3">
                 {['Round trip bus transportation', 'Racetrack admission included', 'Food & drinks on board'].map((item) => (
                   <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                     <CheckCircle size={16} className="text-primary shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
               <div className="mt-auto">
                 <span className="font-heading text-4xl text-foreground">$195</span>
                 <span className="text-muted-foreground text-sm ml-2">per person</span>
               </div>
               <Link
                 to="/book"
                 className="inline-flex items-center justify-center gap-2 py-3 border border-primary text-primary font-bold text-sm uppercase tracking-wider rounded transition-all hover:bg-primary hover:text-black"
               >
                 Book Standard <ArrowRight size={14} />
               </Link>
             </motion.div>


             {/* VIP */}
             <motion.div
               variants={fadeUp}
               whileHover={{ y: -4, transition: { duration: 0.2 } }}
               className="bg-card border-2 border-primary rounded-lg p-8 flex flex-col gap-6 relative overflow-hidden"
             >
               <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl">
                 VIP
               </div>
               <div>
                 <span className="text-xs font-bold uppercase tracking-widest text-primary">Premium</span>
                 <h3 className="font-heading text-3xl text-foreground mt-1">VIP Package</h3>
               </div>
               <ul className="flex flex-col gap-3">
                 {[
                   'Everything in Standard',
                   'Priority seating on the bus',
                   'Premium race day experience',
                   'Exclusive VIP treatment',
                 ].map((item) => (
                   <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                     <Star size={16} className="text-primary shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
               <p className="text-xs font-bold uppercase tracking-wider text-primary">
                 ⚡ VIP spots sell out fast
               </p>
               <div className="mt-auto">
                 <span className="font-heading text-4xl text-foreground">$295</span>
                 <span className="text-muted-foreground text-sm ml-2">per person</span>
               </div>
               <Link
                 to="/book"
                 state={{ package: 'vip' }}
                 className="inline-flex items-center justify-center gap-2 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider rounded transition-all hover:brightness-110"
               >
                 Reserve VIP Spot <ArrowRight size={14} />
               </Link>
             </motion.div>
           </motion.div>
         </motion.div>
       </div>
     </section>


     {/* ─── MERCH / GEAR UP ──────────────────────────────────── */}
     <section className="py-24 bg-background relative overflow-hidden">
       <div
         className="absolute inset-0 bg-cover bg-center opacity-10"
         style={{ backgroundImage: `url('/assets/horses-racing.jpg')` }}
       />
       <div className="relative z-10 container mx-auto px-4">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="max-w-2xl flex flex-col gap-6"
         >
           <motion.div variants={fadeUp}>
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Gear Up</span>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-2 leading-none">
               Jawsome Racing Stable
             </h2>
             <p className="text-xl text-muted-foreground mt-3 italic">
               "More than a trip — it's the experience"
             </p>
           </motion.div>
           <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
             Rep the brand at the track. Official Jawsome Racing apparel is here — pink shirts for the ladies, Saratoga slogan tees, the Race Day Hoodie, and the Jawsome Racing Cap.
           </motion.p>
           <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
             <span className="text-sm border border-border text-muted-foreground px-4 py-2 rounded">Ladies' Pink Tee</span>
             <span className="text-sm border border-border text-muted-foreground px-4 py-2 rounded">Saratoga Slogan Tee</span>
             <span className="text-sm border border-border text-muted-foreground px-4 py-2 rounded">Race Day Hoodie</span>
             <span className="text-sm border border-border text-muted-foreground px-4 py-2 rounded">Jawsome Racing Cap</span>
           </motion.div>
           <motion.div variants={fadeUp}>
             <Link
               to="/merch"
               className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider rounded transition-all hover:brightness-110 hover:scale-105"
             >
               Shop the Collection <ArrowRight size={14} />
             </Link>
           </motion.div>
         </motion.div>
       </div>
     </section>


     {/* ─── OUR STORY ────────────────────────────────────────── */}
     <section id="story" className="py-24 bg-muted">
       <div className="container mx-auto px-4">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
         >
           <motion.div variants={fadeUp} className="flex flex-col gap-6">
             <div>
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Origin</span>
               <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-2 leading-none">
                 Our Story
               </h2>
             </div>
             <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
               <p>
                 It started with family trips to the track. The energy, the community, the thrill of watching these incredible animals compete — it got into our blood early.
               </p>
               <p>
                 Over time, we started meeting the real people behind racing. Trainers, riders, hot walkers — the ones who make the sport run. Those relationships changed everything.
               </p>
               <p>
                 Then came that lucky win day. The kind that reminds you why you fell in love with racing in the first place. That day sparked something bigger.
               </p>
             </div>
             <p className="font-heading text-xl text-primary">
               Now building something bigger.
             </p>
             <Link
               to="/about"
               className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:underline w-fit"
             >
               Read the Full Story <ArrowRight size={14} />
             </Link>
           </motion.div>


           <motion.div
             variants={fadeUp}
             className="relative h-80 md:h-full min-h-64 rounded-lg overflow-hidden"
           >
             <img
               src="/assets/vip-experience.jpg"
               alt="Racing experience"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
           </motion.div>
         </motion.div>
       </div>
     </section>


     {/* ─── BUILDING THE STABLE ──────────────────────────────── */}
     <section id="stable" className="py-24 bg-background">
       <div className="container mx-auto px-4">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="flex flex-col gap-14"
         >
           <motion.div variants={fadeUp} className="max-w-xl">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Vision</span>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-2 leading-none">
               Building the Jawsome Racing Stable
             </h2>
             <p className="text-muted-foreground mt-3">
               This is more than a fun bus. We're building a real presence in the sport.
             </p>
           </motion.div>


           <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               {
                 icon: Trophy,
                 title: 'Trainer Connections',
                 desc: 'Deep relationships with trainers at Saratoga and Belmont. We know the people who know the horses.',
               },
               {
                 icon: Users,
                 title: 'Growing Team',
                 desc: 'Building our crew — hot walkers, exercise riders, and racing professionals joining the Jawsome family.',
               },
               {
                 icon: Star,
                 title: 'Investment Group',
                 desc: 'Forming a racing investment group for those who want more than a seat — they want a stake in the sport.',
               },
             ].map((item) => (
               <motion.div
                 key={item.title}
                 variants={fadeUp}
                 whileHover={{ y: -4, transition: { duration: 0.2 } }}
                 className="bg-card border border-border rounded-lg p-8 flex flex-col gap-4"
               >
                 <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                   <item.icon size={20} className="text-primary" />
                 </div>
                 <h3 className="font-heading text-2xl text-foreground">{item.title}</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
           </motion.div>


           <motion.div variants={fadeUp}>
             <Link
               to="/contact"
               className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-bold text-sm uppercase tracking-wider rounded transition-all hover:bg-primary hover:text-black"
             >
               Get Involved <ArrowRight size={14} />
             </Link>
           </motion.div>
         </motion.div>
       </div>
     </section>


     {/* ─── FINAL CTA ────────────────────────────────────────── */}
     <section className="relative py-32 overflow-hidden">
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url('/assets/horses-racing.jpg')` }}
       />
       <div className="absolute inset-0 bg-black/75" />
       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />


       <div className="relative z-10 container mx-auto px-4 text-center">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="flex flex-col items-center gap-6"
         >
           <motion.h2
             variants={fadeUp}
             className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none"
           >
             Ready for Saratoga?
           </motion.h2>
           <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-md">
             Secure your spot before it fills. Limited seats per event — don't miss out.
           </motion.p>
           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
             <Link
               to="/book"
               className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-bold text-base uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-105 shadow-2xl shadow-primary/30"
             >
               Book Now
               <ArrowRight size={18} />
             </Link>
             <Link
               to="/events"
               className="inline-flex items-center gap-3 px-10 py-5 border border-white/30 text-white font-bold text-base uppercase tracking-widest rounded transition-all hover:border-primary hover:text-primary"
             >
               View All Events
             </Link>
           </motion.div>
         </motion.div>
       </div>
     </section>
   </>
 );
}