import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { c as createLucideIcon, d as distExports, r as reactExports, j as jsxRuntimeExports, H as Helmet, m as motion } from "./entry-server-BVglvtKR.js";
import { C as ChevronRight } from "./chevron-right-CoEaUyE3.js";
import { U as User } from "./user-9BmFt98_.js";
import "../server.bundle.mjs";
import "tty";
import "util";
import "os";
import "path";
import "buffer";
import "string_decoder";
import "node:zlib";
import "node:events";
import "url";
import "node:path";
import "node:fs";
import "node:http";
import "crypto";
import "fs";
import "node:querystring";
import "node:buffer";
import "node:net";
import "stream";
import "node:url";
import "events";
import "http";
import "https";
import "async_hooks";
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EyeOff = createLucideIcon("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eye = createLucideIcon("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LogOut = createLucideIcon("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Package = createLucideIcon("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
]);
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
function AccountPage() {
  const [searchParams] = distExports.useSearchParams();
  const redirect = searchParams.get("redirect");
  const [view, setView] = reactExports.useState("login");
  const [loggedIn, setLoggedIn] = reactExports.useState(false);
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loginForm, setLoginForm] = reactExports.useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = reactExports.useState({ firstName: "", lastName: "", email: "", password: "", confirm: "" });
  const [userName, setUserName] = reactExports.useState("");
  const [orders, setOrders] = reactExports.useState([]);
  async function loadOrders(email) {
    const res = await fetch(`/api/account/orders?email=${encodeURIComponent(email)}`);
    const data = await res.json();
    if (!res.ok) {
      console.error(data.error || "Failed to load orders");
      return;
    }
    setOrders(data.orders || []);
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    setUserName(loginForm.email.split("@")[0]);
    setLoggedIn(true);
    setView("dashboard");
    await loadOrders(loginForm.email);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setUserName(signupForm.firstName);
    setLoggedIn(true);
    setView("dashboard");
    await loadOrders(signupForm.email);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setView("login");
    setLoginForm({ email: "", password: "" });
    setOrders([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Helmet, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "My Account | Jawsome Derby Fun Bus" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4", children: loggedIn ? "Welcome Back" : "Your Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-7xl uppercase text-foreground leading-none", children: [
        loggedIn ? `Hey, ${userName}` : view === "login" ? "Sign In" : "Sign Up",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: loggedIn ? "👋" : "" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      loggedIn && view === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, className: "max-w-3xl flex flex-col gap-8", children: [
        redirect === "checkout" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "border border-primary/30 bg-primary/10 rounded-lg p-4 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "You're signed in! Ready to complete your order?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(distExports.Link, { to: "/checkout?mode=guest", className: "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black text-xs font-bold tracking-widest uppercase rounded", children: [
            "Back to Checkout ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "border border-border rounded-lg p-6 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 24, className: "text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-2xl uppercase text-foreground", children: userName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: loginForm.email || signupForm.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "flex items-center gap-2 text-xs text-muted-foreground hover:text-red-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 14 }),
            " Sign Out"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Order History" })
          ] }),
          orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No orders yet. Time to shop!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.Link, { to: "/merch", className: "inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-black text-xs font-bold tracking-widest uppercase rounded", children: "Shop Merch" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: orders.map((order) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-primary/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-xl text-primary", children: order.order_number || "Pending" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-green-900/40 text-green-400", children: order.status })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: order.created_at ? new Date(order.created_at).toLocaleDateString() : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-muted-foreground", children: (_a = order.order_items) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  item.quantity,
                  " × ",
                  item.name
                ] }, index)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-2xl text-foreground shrink-0", children: [
                "$",
                order.total_amount
              ] })
            ] }, order.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(distExports.Link, { to: "/events", className: "border border-border rounded-lg p-5 hover:border-primary group flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-xl uppercase text-foreground group-hover:text-primary", children: "Browse Events" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(distExports.Link, { to: "/merch", className: "border border-border rounded-lg p-5 hover:border-primary group flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-xl uppercase text-foreground group-hover:text-primary", children: "Shop Merch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ] })
        ] })
      ] }),
      !loggedIn && view === "login" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            initial: "hidden",
            animate: "visible",
            variants: stagger,
            onSubmit: handleLogin,
            className: "flex flex-col gap-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "font-heading text-3xl uppercase text-foreground", children: "Sign In to Your Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    value: loginForm.email,
                    onChange: (e) => setLoginForm({ ...loginForm, email: e.target.value }),
                    className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                    placeholder: "your@email.com"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Password *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: showPassword ? "text" : "password",
                      required: true,
                      value: loginForm.password,
                      onChange: (e) => setLoginForm({ ...loginForm, password: e.target.value }),
                      className: "w-full bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors pr-10",
                      placeholder: "••••••••"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors",
                      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all",
                  children: [
                    "Sign In ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { variants: fadeUp, className: "text-sm text-muted-foreground", children: [
                "Don't have an account?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setView("signup"), className: "text-primary hover:brightness-110 font-medium transition-colors", children: "Sign up free" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            className: "border border-border rounded-lg p-6 flex flex-col gap-4 h-fit",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl uppercase text-foreground", children: "Why Create an Account?" }),
              [
                "Track your merch orders in one place",
                "Save your booking details for faster checkout",
                "Get early access to new events and drops",
                "Exclusive member discounts and offers"
              ].map((benefit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-primary mt-0.5 shrink-0" }),
                benefit
              ] }, i))
            ]
          }
        )
      ] }),
      !loggedIn && view === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            initial: "hidden",
            animate: "visible",
            variants: stagger,
            onSubmit: handleSignup,
            className: "flex flex-col gap-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "font-heading text-3xl uppercase text-foreground", children: "Create Your Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                { label: "First Name", key: "firstName", placeholder: "Jane" },
                { label: "Last Name", key: "lastName", placeholder: "Smith" }
              ].map(({ label, key, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: [
                  label,
                  " *"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    value: signupForm[key],
                    onChange: (e) => setSignupForm({ ...signupForm, [key]: e.target.value }),
                    className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                    placeholder
                  }
                )
              ] }, key)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    value: signupForm.email,
                    onChange: (e) => setSignupForm({ ...signupForm, email: e.target.value }),
                    className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                    placeholder: "your@email.com"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Password *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: showPassword ? "text" : "password",
                      required: true,
                      minLength: 8,
                      value: signupForm.password,
                      onChange: (e) => setSignupForm({ ...signupForm, password: e.target.value }),
                      className: "w-full bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors pr-10",
                      placeholder: "Min. 8 characters"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors",
                      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Confirm Password *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "password",
                    required: true,
                    value: signupForm.confirm,
                    onChange: (e) => setSignupForm({ ...signupForm, confirm: e.target.value }),
                    className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                    placeholder: "••••••••"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all",
                  children: [
                    "Create Account ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { variants: fadeUp, className: "text-sm text-muted-foreground", children: [
                "Already have an account?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setView("login"), className: "text-primary hover:brightness-110 font-medium transition-colors", children: "Sign in" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            className: "border border-border rounded-lg p-6 flex flex-col gap-4 h-fit",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl uppercase text-foreground", children: "Member Benefits" }),
              [
                "Track your merch orders in one place",
                "Save your booking details for faster checkout",
                "Get early access to new events and drops",
                "Exclusive member discounts and offers"
              ].map((benefit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-primary mt-0.5 shrink-0" }),
                benefit
              ] }, i))
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  AccountPage as default
};
