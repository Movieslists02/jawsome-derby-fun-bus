import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useSearchParams } from 'react-router-dom';
import { Check, ChevronRight, User, Package, LogOut, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type AccountView = 'login' | 'signup' | 'dashboard';


type Order = {
  id: string;
  order_number?: string;
  customer_email?: string;
  total_amount: number;
  status: string;
  created_at?: string;
  order_items?: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

export default function AccountPage() {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');

  const [view, setView] = useState<AccountView>('login');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirm: '' });
  const [userName, setUserName] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);


  async function loadOrders(email: string) {
  const res = await fetch(`/api/account/orders?email=${encodeURIComponent(email)}`);
  const data = await res.json();

  if (!res.ok) {
    console.error(data.error || "Failed to load orders");
    return;
  }

  setOrders(data.orders || []);
}

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserName(loginForm.email.split('@')[0]);
    setLoggedIn(true);
    setView('dashboard');
    await loadOrders(loginForm.email);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserName(signupForm.firstName);
    setLoggedIn(true);
    setView('dashboard');
    await loadOrders(signupForm.email);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setView('login');
    setLoginForm({ email: '', password: '' });
    setOrders([]);
  };

  return (
    <>
      <Helmet>
        <title>My Account | Jawsome Derby Fun Bus</title>
      </Helmet>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
              {loggedIn ? 'Welcome Back' : 'Your Account'}
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl uppercase text-foreground leading-none">
              {loggedIn ? `Hey, ${userName}` : view === 'login' ? 'Sign In' : 'Sign Up'}<br />
              <span className="text-primary">{loggedIn ? '👋' : ''}</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loggedIn && view === 'dashboard' && (
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl flex flex-col gap-8">
              {redirect === 'checkout' && (
                <motion.div variants={fadeUp} className="border border-primary/30 bg-primary/10 rounded-lg p-4 flex items-center justify-between gap-4">
                  <p className="text-sm text-foreground">You're signed in! Ready to complete your order?</p>
                  <Link to="/checkout?mode=guest" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black text-xs font-bold tracking-widest uppercase rounded">
                    Back to Checkout <ChevronRight size={12} />
                  </Link>
                </motion.div>
              )}

              <motion.div variants={fadeUp} className="border border-border rounded-lg p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <User size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl uppercase text-foreground">{userName}</p>
                    <p className="text-xs text-muted-foreground">{loginForm.email || signupForm.email}</p>
                  </div>
                </div>
                <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-red-400">
                  <LogOut size={14} /> Sign Out
                </button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Package size={18} className="text-primary" />
                  <h2 className="font-heading text-3xl uppercase text-foreground">Order History</h2>
                </div>

                {orders.length === 0 ? (
                  <div className="border border-border rounded-lg p-8 text-center">
                    <p className="text-muted-foreground text-sm">No orders yet. Time to shop!</p>
                    <Link to="/merch" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-black text-xs font-bold tracking-widest uppercase rounded">
                      Shop Merch
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-primary/50">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3">
                            <span className="font-heading text-xl text-primary">
                              {order.order_number || 'Pending'}
                            </span>
                            <span className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-green-900/40 text-green-400">
                              {order.status}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {order.created_at ? new Date(order.created_at).toLocaleDateString() : '—'}
                          </p>
                          <div className="mt-3 text-sm text-muted-foreground">
  {order.order_items?.map((item, index) => (
    <div key={index}>
      {item.quantity} × {item.name}
    </div>
  ))}
</div>
                        </div>
                        <span className="font-heading text-2xl text-foreground shrink-0">
                          ${order.total_amount}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/events" className="border border-border rounded-lg p-5 hover:border-primary group flex items-center justify-between">
                  <span className="font-heading text-xl uppercase text-foreground group-hover:text-primary">Browse Events</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/merch" className="border border-border rounded-lg p-5 hover:border-primary group flex items-center justify-between">
                  <span className="font-heading text-xl uppercase text-foreground group-hover:text-primary">Shop Merch</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          )}

          {/* LOGIN FORM */}
          {!loggedIn && view === 'login' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
              <motion.form
                initial="hidden"
                animate="visible"
                variants={stagger}
                onSubmit={handleLogin}
                className="flex flex-col gap-5"
              >
                <motion.h2 variants={fadeUp} className="font-heading text-3xl uppercase text-foreground">Sign In to Your Account</motion.h2>

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Email *</label>
                  <input
                    type="email" required
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Password *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'} required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all"
                  >
                    Sign In <ChevronRight size={16} />
                  </button>
                </motion.div>

                <motion.p variants={fadeUp} className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <button type="button" onClick={() => setView('signup')} className="text-primary hover:brightness-110 font-medium transition-colors">
                    Sign up free
                  </button>
                </motion.p>
              </motion.form>

              {/* Benefits panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border border-border rounded-lg p-6 flex flex-col gap-4 h-fit"
              >
                <h3 className="font-heading text-2xl uppercase text-foreground">Why Create an Account?</h3>
                {[
                  'Track your merch orders in one place',
                  'Save your booking details for faster checkout',
                  'Get early access to new events and drops',
                  'Exclusive member discounts and offers',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    {benefit}
                  </div>
                ))}
              </motion.div>
            </div>
          )}

          {/* SIGNUP FORM */}
          {!loggedIn && view === 'signup' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
              <motion.form
                initial="hidden"
                animate="visible"
                variants={stagger}
                onSubmit={handleSignup}
                className="flex flex-col gap-5"
              >
                <motion.h2 variants={fadeUp} className="font-heading text-3xl uppercase text-foreground">Create Your Account</motion.h2>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'First Name', key: 'firstName', placeholder: 'Jane' },
                    { label: 'Last Name', key: 'lastName', placeholder: 'Smith' },
                  ].map(({ label, key, placeholder }) => (
                    <motion.div key={key} variants={fadeUp} className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{label} *</label>
                      <input
                        type="text" required
                        value={signupForm[key as keyof typeof signupForm]}
                        onChange={(e) => setSignupForm({ ...signupForm, [key]: e.target.value })}
                        className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder={placeholder}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Email *</label>
                  <input
                    type="email" required
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Password *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'} required minLength={8}
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                      className="w-full bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors pr-10"
                      placeholder="Min. 8 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Confirm Password *</label>
                  <input
                    type="password" required
                    value={signupForm.confirm}
                    onChange={(e) => setSignupForm({ ...signupForm, confirm: e.target.value })}
                    className="bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="••••••••"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all"
                  >
                    Create Account <ChevronRight size={16} />
                  </button>
                </motion.div>

                <motion.p variants={fadeUp} className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <button type="button" onClick={() => setView('login')} className="text-primary hover:brightness-110 font-medium transition-colors">
                    Sign in
                  </button>
                </motion.p>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border border-border rounded-lg p-6 flex flex-col gap-4 h-fit"
              >
                <h3 className="font-heading text-2xl uppercase text-foreground">Member Benefits</h3>
                {[
                  'Track your merch orders in one place',
                  'Save your booking details for faster checkout',
                  'Get early access to new events and drops',
                  'Exclusive member discounts and offers',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    {benefit}
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section> 
    </>
  );
}
