import { motion } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { Trash2, ChevronRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      <Helmet>
        <title>Your Cart | Jawsome Derby Fun Bus</title>
        <meta name="description" content="Review your Jawsome Derby merchandise cart and proceed to checkout." />
      </Helmet>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Your Order
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl uppercase text-foreground leading-none">
              Shopping<br /><span className="text-primary">Cart</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-6 text-center"
            >
              <div className="w-20 h-20 border-2 border-border rounded-full flex items-center justify-center text-muted-foreground">
                <ShoppingBag size={32} />
              </div>
              <h2 className="font-heading text-4xl uppercase text-foreground">Your Cart Is Empty</h2>
              <p className="text-muted-foreground text-sm max-w-sm">
                Looks like you haven't added anything yet. Head over to the merch shop to find something you love.
              </p>
              <Link
                to="/merch"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 transition-all"
              >
                Shop Merch
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* ITEMS */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="lg:col-span-2 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
                  <Link to="/merch" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <ArrowLeft size={12} /> Continue Shopping
                  </Link>
                </div>

                {items.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    variants={fadeUp}
                    layout
                    className="flex gap-4 border border-border rounded-lg p-4 hover:border-primary/50 transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded border border-border shrink-0"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-heading text-xl uppercase text-foreground leading-tight">{item.name}</h3>
                          <span className="text-xs text-muted-foreground">Size: {item.size}</span>
                        </div>
                        <span className="font-heading text-xl text-primary shrink-0">${item.price * item.quantity}</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        {/* Quantity */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="w-7 h-7 border border-border rounded flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all text-sm font-bold"
                          >
                            −
                          </button>
                          <span className="font-heading text-xl text-foreground w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="w-7 h-7 border border-border rounded flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all text-sm font-bold"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-muted-foreground hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* ORDER SUMMARY */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="border border-border rounded-lg p-6 flex flex-col gap-4 sticky top-32">
                  <h2 className="font-heading text-2xl uppercase text-foreground">Order Summary</h2>

                  <div className="flex flex-col gap-2 text-sm">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex justify-between text-muted-foreground">
                        <span>{item.name} × {item.quantity}</span>
                        <span>${item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-3 flex flex-col gap-2 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold text-foreground">Estimated Total</span>
                    <span className="font-heading text-3xl text-primary">${totalPrice}</span>
                  </div>

                  <Link
                    to="/checkout"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all"
                  >
                    Proceed to Checkout <ChevronRight size={16} />
                  </Link>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure checkout. Guest checkout available.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
