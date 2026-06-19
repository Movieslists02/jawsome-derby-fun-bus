import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Star, ArrowRight, Heart } from 'lucide-react';


const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };


export default function AboutPage() {
 return (
   <>
     <Helmet>
       <title>Our Story — Jawsome Racing</title>
       <meta name="description" content="From family trips to the track to building the Jawsome Racing Stable. The origin story of a real racing brand built on passion, connections, and that lucky win day." />
     </Helmet>


     {/* Hero */}
     <section className="relative py-28 overflow-hidden">
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url('/assets/vip-experience.jpg')` }}
       />
       <div className="absolute inset-0 bg-black/75" />
       <div className="relative z-10 container mx-auto px-4">
         <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl flex flex-col gap-4">
           <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Origin</motion.span>
           <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl text-white leading-none">Our Story</motion.h1>
           <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-lg">
             Built on family, racing, and that one day that changed everything.
           </motion.p>
         </motion.div>
       </div>
     </section>


     {/* Story sections */}
     <section className="py-20 bg-background">
       <div className="container mx-auto px-4 max-w-3xl">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="flex flex-col gap-16"
         >


           {/* Chapter 1 */}
           <motion.div variants={fadeUp} className="flex flex-col gap-5">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                 <Heart size={16} className="text-primary" />
               </div>
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">How It Started</span>
             </div>
             <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">Family Trips to the Track</h2>
             <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
               <p>
                 It started the way most great things do — with family. Going to the track wasn't just a day out. It was a ritual. The smell of the turf, the sound of hooves on dirt, the electricity in the grandstand before a big race. It got into our blood early and never left.
               </p>
               <p>
                 Saratoga has a magic that's hard to explain to someone who hasn't been. It's not just horse racing — it's a whole world. The history, the tradition, the community. Every summer, we'd make the trip, and every summer it meant more than the last.
               </p>
             </div>
           </motion.div>


           {/* Divider */}
           <div className="w-16 h-px bg-primary/30" />


           {/* Chapter 2 */}
           <motion.div variants={fadeUp} className="flex flex-col gap-5">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                 <Users size={16} className="text-primary" />
               </div>
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Going Deeper</span>
             </div>
             <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">Meeting the People Behind Racing</h2>
             <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
               <p>
                 Over time, we started meeting the real people who make the sport run. Trainers who've spent decades at Saratoga and Belmont. Exercise riders who are at the barn before sunrise. Hot walkers who know every horse by name and personality.
               </p>
               <p>
                 These relationships changed how we saw racing. It stopped being just a spectator sport and became something we were genuinely part of. The more we learned, the more we wanted to be involved — not just watching from the grandstand, but building something real inside the sport.
               </p>
             </div>
           </motion.div>


           {/* Divider */}
           <div className="w-16 h-px bg-primary/30" />


           {/* Chapter 3 — The Win */}
           <motion.div variants={fadeUp} className="flex flex-col gap-5">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                 <Trophy size={16} className="text-primary" />
               </div>
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Turning Point</span>
             </div>
             <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">That Lucky Win Day</h2>
             <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
               <p>
                 Then came that day. The kind of day at the track that you remember for the rest of your life. The right horse, the right race, the right moment. A win that felt like more than luck — it felt like a sign.
               </p>
               <p>
                 That day didn't just put money in our pocket. It sparked something. A clarity about what we wanted to build and why. Racing had given us so much — the memories, the connections, the community — and it was time to give something back. To create an experience that others could share.
               </p>
             </div>


             {/* Pull quote */}
             <blockquote className="border-l-2 border-primary pl-6 py-2 my-2">
               <p className="font-heading text-2xl text-foreground italic leading-snug">
                 "That day reminded us why we fell in love with racing in the first place."
               </p>
             </blockquote>
           </motion.div>


           {/* Divider */}
           <div className="w-16 h-px bg-primary/30" />


           {/* Chapter 4 — Now */}
           <motion.div variants={fadeUp} className="flex flex-col gap-5">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                 <Star size={16} className="text-primary" />
               </div>
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What We're Building</span>
             </div>
             <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">Now Building Something Bigger</h2>
             <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
               <p>
                 The Jawsome Racing Fun Bus is just the beginning. We're building a brand — a community of people who love racing the way we do. People who want more than a ticket to the track. They want the full experience.
               </p>
               <p>
                 And beyond the Fun Bus, we're building the Jawsome Racing Stable. Real connections with trainers at Saratoga and Belmont. A growing team of racing professionals. And eventually, a racing investment group for those who want a real stake in the sport.
               </p>
             </div>
             <p className="font-heading text-2xl text-primary">Now building something bigger.</p>
           </motion.div>
         </motion.div>
       </div>
     </section>


     {/* The Stable section */}
     <section className="py-20 bg-muted">
       <div className="container mx-auto px-4">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="flex flex-col gap-10"
         >
           <motion.div variants={fadeUp} className="max-w-xl">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Vision</span>
             <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 leading-none">Building the Jawsome Racing Stable</h2>
           </motion.div>


           <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
             {[
               { icon: Trophy, title: 'Trainer Connections', desc: 'Deep relationships with trainers at Saratoga and Belmont. We know the people who know the horses.' },
               { icon: Users, title: 'Growing Team', desc: 'Building our crew — hot walkers, exercise riders, and racing professionals joining the Jawsome family.' },
               { icon: Star, title: 'Investment Group', desc: 'Forming a racing investment group for those who want more than a seat — they want a stake in the sport.' },
             ].map((item) => (
               <motion.div
                 key={item.title}
                 variants={fadeUp}
                 className="bg-card border border-border rounded-lg p-7 flex flex-col gap-4"
               >
                 <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                   <item.icon size={18} className="text-primary" />
                 </div>
                 <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
           </motion.div>


           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
             <Link
               to="/book"
               className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-105"
             >
               Book Your Spot <ArrowRight size={16} />
             </Link>
             <Link
               to="/contact"
               className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-muted-foreground hover:border-primary hover:text-primary font-bold text-sm uppercase tracking-wider rounded transition-all"
             >
               Get in Touch
             </Link>
           </motion.div>
         </motion.div>
       </div>
     </section>
   </>
 );
}