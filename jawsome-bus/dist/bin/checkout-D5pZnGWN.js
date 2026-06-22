import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { c as createLucideIcon, u as useCart, d as distExports, r as reactExports, j as jsxRuntimeExports, H as Helmet, m as motion } from "./entry-server-BVglvtKR.js";
import { U as User } from "./user-9BmFt98_.js";
import { C as ChevronRight } from "./chevron-right-CoEaUyE3.js";
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
const Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const navigate = distExports.useNavigate();
  const [searchParams] = distExports.useSearchParams();
  const startMode = searchParams.get("mode") === "guest" ? "guest" : "choose";
  const [mode, setMode] = reactExports.useState(startMode);
  const [form, setForm] = reactExports.useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });
  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/store/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
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
            country_code: "US"
          }
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert("Checkout failed");
    }
  };
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Helmet, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Checkout | Jawsome Derby Fun Bus" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-screen flex items-center justify-center py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-5xl uppercase text-foreground", children: "Your Cart Is Empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Add some items before checking out." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.Link, { to: "/merch", className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 transition-all", children: "Shop Merch" })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Checkout | Jawsome Derby Fun Bus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Complete your Jawsome Derby merchandise order. Guest checkout or sign in to your account." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Secure Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-7xl uppercase text-foreground leading-none", children: [
        "Check",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "out" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      mode === "choose" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          animate: "visible",
          variants: stagger,
          className: "max-w-2xl mx-auto flex flex-col gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "font-heading text-3xl uppercase text-foreground", children: "How would you like to checkout?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  variants: fadeUp,
                  onClick: () => setMode("guest"),
                  className: "flex flex-col gap-3 p-6 border border-border rounded-lg text-left hover:border-primary transition-all group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border border-border rounded flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 20 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl uppercase text-foreground group-hover:text-primary transition-colors", children: "Guest Checkout" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "No account needed. Just enter your details and go." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-1 mt-auto", children: [
                      "Continue as Guest ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  variants: fadeUp,
                  onClick: () => navigate("/account?redirect=checkout"),
                  className: "flex flex-col gap-3 p-6 border border-border rounded-lg text-left hover:border-primary transition-all group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border border-border rounded flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 20 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl uppercase text-foreground group-hover:text-primary transition-colors", children: "Sign In / Sign Up" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Save your details, track orders, and earn rewards." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-1 mt-auto", children: [
                      "Sign In ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "flex items-center justify-between pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.Link, { to: "/cart", className: "text-xs text-muted-foreground hover:text-primary transition-colors", children: "← Back to Cart" }) })
          ]
        }
      ),
      mode === "guest" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            initial: "hidden",
            animate: "visible",
            variants: stagger,
            onSubmit: handleCheckout,
            className: "lg:col-span-2 flex flex-col gap-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-heading text-3xl uppercase text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "01" }),
                  " Contact"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Email *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      required: true,
                      value: form.email,
                      onChange: (e) => setForm({ ...form, email: e.target.value }),
                      className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                      placeholder: "your@email.com"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-heading text-3xl uppercase text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "02" }),
                  " Shipping Address"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  [
                    { label: "First Name", key: "firstName", placeholder: "Jane", type: "text" },
                    { label: "Last Name", key: "lastName", placeholder: "Smith", type: "text" }
                  ].map(({ label, key, placeholder, type }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: [
                      label,
                      " *"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type,
                        required: true,
                        value: form[key],
                        onChange: (e) => setForm({ ...form, [key]: e.target.value }),
                        className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                        placeholder
                      }
                    )
                  ] }, key)),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "Street Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        required: true,
                        value: form.address,
                        onChange: (e) => setForm({ ...form, address: e.target.value }),
                        className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                        placeholder: "123 Main St"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "City *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        required: true,
                        value: form.city,
                        onChange: (e) => setForm({ ...form, city: e.target.value }),
                        className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                        placeholder: "Albany"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "State *" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          required: true,
                          maxLength: 2,
                          value: form.state,
                          onChange: (e) => setForm({ ...form, state: e.target.value }),
                          className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors uppercase",
                          placeholder: "NY"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-widest uppercase text-muted-foreground", children: "ZIP *" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          required: true,
                          value: form.zip,
                          onChange: (e) => setForm({ ...form, zip: e.target.value }),
                          className: "bg-card border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors",
                          placeholder: "12207"
                        }
                      )
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-heading text-3xl uppercase text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "03" }),
                  " Payment"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-6 bg-card/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16, className: "text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl text-foreground", children: "Secure Payment" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                    "After clicking ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Continue to Payment" }),
                    ", you'll be redirected to Stripe's secure checkout page to complete your purchase."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: "Visa, Mastercard, American Express, Apple Pay and other supported payment methods are accepted through Stripe." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all",
                    children: [
                      "Continue to Payment — $",
                      totalPrice,
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMode("choose"), className: "text-xs text-muted-foreground hover:text-primary transition-colors", children: "← Back" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-6 flex flex-col gap-4 sticky top-32", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl uppercase text-foreground", children: "Your Order" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "w-12 h-12 object-cover rounded border border-border" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-black text-xs font-bold rounded-full flex items-center justify-center", children: item.quantity })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground leading-tight", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "Size: ",
                    item.size
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground", children: [
                  "$",
                  item.price * item.quantity
                ] })
              ] }, `${item.id}-${item.size}`)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex flex-col gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "$",
                    totalPrice
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TBD" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-3xl text-primary", children: [
                  "$",
                  totalPrice
                ] })
              ] })
            ] })
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  CheckoutPage as default
};
