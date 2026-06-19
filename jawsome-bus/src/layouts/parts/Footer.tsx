import { Link } from 'react-router-dom';


export default function Footer() {
 const currentYear = new Date().getFullYear();


 return (
   <footer className="bg-background border-t border-border">
     <div className="container mx-auto px-4 py-14">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {/* Brand */}
         <div className="flex flex-col gap-4">
           <img
             src="/assets/logo.png"
             alt="Jawsome Derby Fun Bus Experience logo"
             className="h-20 w-auto object-contain shrink-0 self-start"
           />
           <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
             The premier Saratoga Derby Fun Bus Experience. Round trip transportation, food, drinks & racetrack admission.
           </p>
         </div>


         {/* Quick Links */}
         <div className="flex flex-col gap-3">
           <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Quick Links</h4>
           {[
             { href: '/events', label: 'Events' },
             { href: '/book', label: 'Book Now' },
             { href: '/about', label: 'Our Story' },
             { href: '/merch', label: 'Merch' },
             { href: '/contact', label: 'Contact' },
           ].map((link) => (
             <a
               key={link.href}
               href={link.href}
               className="text-sm text-muted-foreground hover:text-primary transition-colors"
             >
               {link.label}
             </a>
           ))}
         </div>


         {/* Contact / Social */}
         <div className="flex flex-col gap-3">
           <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Connect</h4>
           <p className="text-sm text-muted-foreground">Follow us for race day updates and exclusive offers.</p>
           <div className="flex gap-4 mt-1">
             {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
               <a
                 key={platform}
                 href="#"
                 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
               >
                 {platform}
               </a>
             ))}
           </div>
         </div>
       </div>


       <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
         <p className="text-xs text-muted-foreground">
           © {currentYear} Jawsome Racing. All rights reserved.
         </p>
         <div className="flex gap-5">
           <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
           <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</Link>
         </div>
       </div>
     </div>
   </footer>
 );
}