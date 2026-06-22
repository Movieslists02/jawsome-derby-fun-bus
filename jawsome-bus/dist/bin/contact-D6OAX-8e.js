import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, H as Helmet, m as motion, U as Users, d as distExports, A as ArrowRight } from "./entry-server-BVglvtKR.js";
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
const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
function ContactPage() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "", subject: "general", message: "", honeypot: "" });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSubmitted(true);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Contact — Jawsome Racing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Get in touch with Jawsome Racing. Group bookings, VIP inquiries, and general questions about the Saratoga Fun Bus Experience." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: { backgroundImage: `url('/assets/hero.jpg')` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, className: "max-w-xl flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-6xl text-white leading-none", children: "Contact Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-lg text-white/70", children: "Questions, group bookings, VIP inquiries — we're here." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          className: "flex flex-col gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl text-foreground", children: "Reach Out" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2 leading-relaxed", children: "Whether you're booking for a group, asking about VIP packages, or just want to know more — we'd love to hear from you." })
            ] }),
            [
              { icon: Mail, label: "Email", value: "info@jawsomeracing.com", href: "mailto:info@jawsomeracing.com" },
              { icon: Phone, label: "Phone", value: "(516) 360-7101", href: "tel:5163607101" },
              {
                icon: Users,
                label: "Kentucky Derby 2027",
                value: "Questions about packages, seating options, pricing or payment plans",
                href: null
              }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 16, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: item.label }),
                item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: "text-sm text-foreground hover:text-primary transition-colors", children: item.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: item.value })
              ] })
            ] }, item.label)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Ready to book?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                distExports.Link,
                {
                  to: "/book",
                  className: "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black font-bold text-xs uppercase tracking-wider rounded transition-all hover:brightness-110",
                  children: [
                    "Book Now ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          className: "lg:col-span-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-lg p-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className: "flex flex-col items-center text-center gap-4 py-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 28, className: "text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl text-foreground", children: "Message Received!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-sm", children: "Thanks for reaching out. We'll get back to you within 24 hours." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  distExports.Link,
                  {
                    to: "/book",
                    className: "mt-2 inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider rounded transition-all hover:brightness-110",
                    children: [
                      "Book Your Spot ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                    ]
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-xl text-foreground", children: "Send a Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                name: "honeypot",
                value: form.honeypot,
                onChange: (e) => setForm((f) => ({ ...f, honeypot: e.target.value })),
                style: { display: "none" },
                tabIndex: -1,
                autoComplete: "off"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    value: form.name,
                    onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                    placeholder: "Your name",
                    className: "bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    value: form.email,
                    onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                    placeholder: "your@email.com",
                    className: "bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    value: form.phone,
                    onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
                    placeholder: "(555) 000-0000",
                    className: "bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Subject" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: form.subject,
                    onChange: (e) => setForm((f) => ({ ...f, subject: e.target.value })),
                    className: "bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Inquiry" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "derby-general", children: "Kentucky Derby 2027 Information" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "derby-group", children: "Kentucky Derby Group Booking" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "derby-payment", children: "Kentucky Derby Payment Plan" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "group", children: "Group Booking (8+)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "vip", children: "VIP Package" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "stable", children: "Racing Stable / Investment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "merch", children: "Merch / Apparel" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Message *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  rows: 5,
                  value: form.message,
                  onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
                  placeholder: "Tell us what you're looking for...",
                  className: "bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                }
              )
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-red-400 bg-muted border border-border rounded px-4 py-3", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loading,
                className: "inline-flex items-center justify-center gap-2 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed",
                children: loading ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                ] })
              }
            )
          ] }) })
        }
      )
    ] }) }) })
  ] });
}
export {
  ContactPage as default
};
