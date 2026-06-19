import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function Header() {
 const location = useLocation();
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


 const navItems = [
   { href: '/derby', label: 'Derby' },
   { href: '/events', label: 'Events' },
   { href: '/about', label: 'Our Story' },
   { href: '/merch', label: 'Merch' },
   { href: '/contact', label: 'Contact' },

 ];

 const { totalItems } = useCart();

 const isActive = (href: string) => location.pathname === href;


 return (
   <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
     <div className="container mx-auto px-4">
       <div className="flex h-28 items-center justify-between">
         {/* Logo */}
         <Link to="/" className="flex items-center shrink-0">
           <img
             src="/assets/logo.png"
             alt="Jawsome Derby Fun Bus Experience logo"
             className="h-20 w-auto object-contain shrink-0"
           />
         </Link>


         {/* Desktop Nav */}
         <nav className="hidden md:flex items-center gap-8">
           {navItems.map((item) => (
             <Link
               key={item.href}
               to={item.href}
               className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                 isActive(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
               }`}
             >
               {item.label}
             </Link>
           ))}
         </nav>

         


         {/* CTA + Mobile Toggle */}
         <div className="flex items-center gap-3">
           <Link
            to="/cart"
            className="relative inline-flex items-center justify-center text-white hover:text-primary transition-colors"
            aria-label="Cart">
           <ShoppingBag size={22} />
            {totalItems > 0 && (
           <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
           </span>
            )}
           </Link>
           
           <Link
             to="/book"
             className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-black text-sm font-bold tracking-wider uppercase rounded transition-all hover:brightness-110 hover:scale-105"
           >
             Book Now
           </Link>
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
           </button>
         </div>
       </div>


       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div className="md:hidden border-t border-border py-5">
           <nav className="flex flex-col gap-1">
             {navItems.map((item) => (
               <Link
                 key={item.href}
                 to={item.href}
                 className={`text-sm font-medium uppercase tracking-wide py-3 px-2 transition-colors ${
                   isActive(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                 }`}
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {item.label}
               </Link>
             ))}
             <Link
               to="/book"
               className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-primary text-black text-sm font-bold tracking-wider uppercase rounded transition-all hover:brightness-110"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Book Now
             </Link>
           </nav>
         </div>
       )}
     </div>
   </header>
 );
}