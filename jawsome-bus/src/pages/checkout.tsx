import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Check, ChevronRight, Lock, User } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type CheckoutMode = 'choose' | 'guest' | 'account';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const startMode: CheckoutMode =
  searchParams.get("mode") === "guest" ? "guest" : "choose";

  const [mode, setMode] = useState<CheckoutMode>(startMode as CheckoutMode);
  

  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', state: '', zip: ''  });

  
  
  const handleCheckout = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/store/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
  items,
  customer_email: form.email,
  email: form.email,
  customer_name: `${form.firstName} ${form.lastName}`,
  shipping: {
    firstName: form.firstName,
    lastName: form.lastName,
    address1: form.address,
    city: form.city,
    state_code: form.state,
    zip: form.zip,
    country_code: "US",
  },
}),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  } catch (error) {
    console.error(error);
    alert('Checkout failed');
  }
};



  if (items.length === 0) {
    return (
      <>
        <Helmet><title>Checkout | Jawsome Derby Fun Bus</title></Helmet>
        <section className="min-h-screen flex items-center justify-center py-32">
          <div className="text-center flex flex-col items-center gap-6">
            <h1 className="font-heading text-5xl uppercase text-foreground">Your Cart Is Empty</h1>
            <p className="text-muted-foreground text-sm">Add some items before checking out.</p>
            <Link to="/merch" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 transition-all">
              Shop Merch
            </Link>
          </div>
        </section>
      </>
    );
  }

 

  return (
    <>
      <Helmet>
        <title>Checkout | Jawsome Derby Fun Bus</title>
        <meta name="description" content="Complete your Jawsome Derby merchandise order. Guest checkout or sign in to your account." />
      </Helmet>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Secure Checkout</motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl uppercase text-foreground leading-none">
              Check<span className="text-primary">out</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* STEP 1: Choose mode */}
          {mode === 'choose' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl mx-auto flex flex-col gap-6"
            >
              <motion.h2 variants={fadeUp} className="font-heading text-3xl uppercase text-foreground">How would you like to checkout?</motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  variants={fadeUp}
                  onClick={() => setMode('guest')}
                  className="flex flex-col gap-3 p-6 border border-border rounded-lg text-left hover:border-primary transition-all group"
                >
                  <div className="w-10 h-10 border border-border rounded flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all">
                    <User size={20} />
                  </div>
                  <h3 className="font-heading text-2xl uppercase text-foreground group-hover:text-primary transition-colors">Guest Checkout</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">No account needed. Just enter your details and go.</p>
                  <span className="text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-1 mt-auto">
                    Continue as Guest <ChevronRight size={12} />
                  </span>
                </motion.button>

                <motion.button
                  variants={fadeUp}
                  onClick={() => navigate('/account?redirect=checkout')}
                  className="flex flex-col gap-3 p-6 border border-border rounded-lg text-left hover:border-primary transition-all group"
                >
                  <div className="w-10 h-10 border border-border rounded flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all">
                    <Lock size={20} />
                  </div>
                  <h3 className="font-heading text-2xl uppercase text-foreground group-hover:text-primary transition-colors">Sign In / Sign Up</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Save your details, track orders, and earn rewards.</p>
                  <span className="text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-1 mt-auto">
                    Sign In <ChevronRight size={12} />
                  </span>
                </motion.button>
              </div>

              <motion.div variants={fadeUp} className="flex items-center justify-between pt-2">
                <Link to="/cart" className="text-xs text-muted-foreground hover:text-primary transition-colors">← Back to Cart</Link>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 2: Guest checkout form */}
          {mode === 'guest' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.form
                initial="hidden"
                animate="visible"
                variants={stagger}
                onSubmit={handleCheckout}
                className="lg:col-span-2 flex flex-col gap-8"
              >
  
                {/* Contact */}
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <h2 className="font-heading text-3xl uppercase text-foreground">
                    <span className="text-primary">01</span> Contact
                  </h2>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Email *</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                {/* Shipping */}
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <h2 className="font-heading text-3xl uppercase text-foreground">
                    <span className="text-primary">02</span> Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'First Name', key: 'firstName', placeholder: 'Jane', type: 'text' },
                      { label: 'Last Name', key: 'lastName', placeholder: 'Smith', type: 'text' },
                    ].map(({ label, key, placeholder, type }) => (
                      <div key={key} className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{label} *</label>
                        <input
                          type={type} required
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                          placeholder={placeholder}
                        />
                      </div>
                    ))}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Street Address *</label>
                      <input
                        type="text" required
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="123 Main St"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">City *</label>
                      <input
                        type="text" required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Albany"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">State *</label>
                        <input
                          type="text" required maxLength={2}
                          value={form.state}
                          onChange={(e) => setForm({ ...form, state: e.target.value })}
                          className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors uppercase"
                          placeholder="NY"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">ZIP *</label>
                        <input
                          type="text" required
                          value={form.zip}
                          onChange={(e) => setForm({ ...form, zip: e.target.value })}
                          className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                          placeholder="12207"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Payment */}
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <h2 className="font-heading text-3xl uppercase text-foreground">
                    <span className="text-primary">03</span> Payment
                  </h2>
                  <div className="border border-border rounded-lg p-6 bg-card/50">
  <div className="flex items-center gap-2 mb-3">
    <Lock size={16} className="text-primary" />
    <h3 className="font-heading text-2xl text-foreground">
      Secure Payment
    </h3>
  </div>

  <p className="text-muted-foreground">
    After clicking <strong>Continue to Payment</strong>,
    you'll be redirected to Stripe's secure checkout page
    to complete your purchase.
  </p>

  <p className="text-xs text-muted-foreground mt-3">
    Visa, Mastercard, American Express, Apple Pay and other
    supported payment methods are accepted through Stripe.
  </p>
</div>        
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all"
                  >
                    Continue to Payment — ${totalPrice} <ChevronRight size={16} />
                  </button>
                  <button type="button" onClick={() => setMode('choose')} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    ← Back
                  </button>
                </motion.div>
              </motion.form>

              {/* ORDER SUMMARY SIDEBAR */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="border border-border rounded-lg p-6 flex flex-col gap-4 sticky top-32">
                  <h2 className="font-heading text-2xl uppercase text-foreground">Your Order</h2>
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex gap-3 items-center">
                        <div className="relative">
                          <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded border border-border" />
                          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-black text-xs font-bold rounded-full flex items-center justify-center">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground leading-tight">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                        </div>
                        <span className="text-sm font-bold text-foreground">${item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-3 flex flex-col gap-2 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span><span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span><span>TBD</span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-heading text-3xl text-primary">${totalPrice}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
