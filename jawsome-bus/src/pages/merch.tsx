import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';


const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };


const MERCH_ITEMS = [
 {
   id: 'ladies-pink-tee',
   name: "Ladies' Pink Racing Tee",
   desc: 'Soft premium cotton with rose gold "Jawsome Racing Stable" logo and delicate horse silhouette. The race day essential for the ladies.',
   price: 35,
   tag: "Ladies'",
   img: 'https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/f3c342df-6cea-461e-8094-4d32dbff4463/ebdbaf37-original.png',
   sizes: ['S', 'M', 'L', 'XL', '2XL'],
   badge: 'Fan Favorite',
 },
 {
   id: 'slogan-tee',
   name: 'Saratoga Slogan Tee',
   desc: '"See You at the Track" — bold vintage racing typography with Saratoga branding. Unisex fit, race day ready.',
   price: 32,
   tag: 'Unisex',
   img: 'https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/1b00f6d9-9167-4d3b-9032-24116c57c0eb/9be014fb-original.png',
   sizes: ['S', 'M', 'L', 'XL', '2XL'],
   badge: null,
 },
 {
   id: 'racing-cap',
   name: 'Jawsome Racing Cap',
   desc: 'Structured black snapback with gold embroidered Jawsome Racing logo. "Saratoga" stitched on the side. One size fits most.',
   price: 38,
   tag: 'Accessories',
   img: 'https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/fbc1e992-98c2-4e58-b687-a804164eda23/5bcc600a-original.png',
   sizes: ['One Size'],
   badge: 'Best Seller',
 },
 {
   id: 'race-day-hoodie',
   name: 'Race Day Hoodie',
   desc: 'Premium heavyweight hoodie with gold "Jawsome Derby Fun Bus" chest print. Perfect for early mornings at the barn or cool evenings at the track.',
   price: 65,
   tag: 'Unisex',
   img: 'https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/ce0fed3a-8dd1-4f14-a768-314cb4327f17/25f0b501-original.png',
   sizes: ['S', 'M', 'L', 'XL', '2XL'],
   badge: null,
 },
];


function ProductCard({ item }: { item: typeof MERCH_ITEMS[0] }) {
 const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
 const [added, setAdded] = useState(false);
 const { addItem } = useCart();

 
function handleAddToCart() {
  addItem({
    id: item.id,
    name: item.name,
    price: item.price,
    priceLabel: `$${item.price}`,
    image: item.img,
    size: selectedSize,
  });

  setAdded(true);
  setTimeout(() => setAdded(false), 2000);
}


 return (
   <motion.div
     variants={fadeUp}
     whileHover={{ y: -4, transition: { duration: 0.2 } }}
     className="group bg-card border border-border hover:border-primary rounded-lg overflow-hidden flex flex-col transition-all hover:shadow-xl hover:shadow-primary/10"
   >
     {/* Product image */}
     <div className="relative overflow-hidden bg-white aspect-square">
       <img
         src={item.img}
         alt={item.name}
         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
       />
       {item.badge && (
         <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider bg-primary text-black px-2.5 py-1 rounded">
           {item.badge}
         </span>
       )}
       <span className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider bg-background/90 text-muted-foreground border border-border px-2.5 py-1 rounded">
         {item.tag}
       </span>
     </div>


     {/* Info */}
     <div className="p-5 flex flex-col gap-3 flex-1">
       <div className="flex items-start justify-between gap-2">
         <h3 className="font-heading text-lg text-foreground leading-tight">{item.name}</h3>
         <span className="font-heading text-2xl text-primary shrink-0">${item.price}</span>
       </div>


       <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>


       {/* Size selector */}
       {item.sizes.length > 1 && (
         <div className="flex flex-col gap-1.5">
           <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Size</span>
           <div className="flex flex-wrap gap-1.5">
             {item.sizes.map((size) => (
               <button
                 key={size}
                 onClick={() => setSelectedSize(size)}
                 className={`text-xs font-semibold px-2.5 py-1 rounded border transition-all ${
                   selectedSize === size
                     ? 'border-primary bg-primary/10 text-primary'
                     : 'border-border text-muted-foreground hover:border-primary/50'
                 }`}
               >
                 {size}
               </button>
             ))}
           </div>
         </div>
       )}


       {/* Add to cart */}
       <button
         onClick={handleAddToCart}
         className={`mt-auto inline-flex items-center justify-center gap-2 py-3 font-bold text-sm uppercase tracking-wider rounded transition-all ${
           added
             ? 'bg-green-600 text-white'
             : 'bg-primary text-black hover:brightness-110 hover:scale-[1.02]'
         }`}
       >
         {added ? (
           <>Added! ✓</>
         ) : (
           <><ShoppingCart size={14} /> Add to Cart</>
         )}
       </button>
     </div>
   </motion.div>
 );
}


export default function MerchPage() {
 const [email, setEmail] = useState('');
 const [notifySubmitted, setNotifySubmitted] = useState(false);


 function handleNotify(e: React.FormEvent) {
   e.preventDefault();
   if (email) setNotifySubmitted(true);
 }


 return (
   <>
     <Helmet>
       <title>Merch — Jawsome Racing Stable</title>
       <meta name="description" content="Official Jawsome Racing Stable gear. Race Day Hoodie, Jawsome Racing Cap, Saratoga Slogan Tee, Ladies' Pink Racing Tee. Wear the brand." />
     </Helmet>


     {/* Hero */}
     <section className="relative py-24 overflow-hidden">
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url('/assets/horses-racing.jpg')` }}
       />
       <div className="absolute inset-0 bg-black/75" />
       <div className="relative z-10 container mx-auto px-4">
         <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl flex flex-col gap-4">
           <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Official Gear</motion.span>
           <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl text-white leading-none">
             Jawsome Racing<br />
             <span className="text-primary">Stable Gear</span>
           </motion.h1>
           <motion.p variants={fadeUp} className="text-lg text-white/70">
             Wear the brand. Built for race day.
           </motion.p>
         </motion.div>
       </div>
     </section>


     {/* Products */}
     <section className="py-20 bg-background">
       <div className="container mx-auto px-4">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="flex flex-col gap-12"
         >
           {/* Section header */}
           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
             <div>
               <h2 className="font-heading text-3xl md:text-4xl text-foreground">The Collection</h2>
               <p className="text-muted-foreground mt-1 text-sm">4 pieces. All built for the track.</p>
             </div>
             <div className="flex items-center gap-2 text-xs text-muted-foreground">
               <Star size={12} className="text-primary" />
               <span>Free shipping on orders over $75</span>
             </div>
           </motion.div>


           {/* Product grid */}
           <motion.div
             variants={stagger}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
           >
             {MERCH_ITEMS.map((item) => (
               <ProductCard key={item.id} item={item} />
             ))}
           </motion.div>



           {/* CTA back to booking */}
           <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
             <p className="text-muted-foreground text-sm">Ready for race day?</p>
             <Link
               to="/book"
               className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:underline"
             >
               Book Your Spot <ArrowRight size={14} />
             </Link>
           </motion.div>
         </motion.div>
       </div>
     </section>
   </>
 );
}