import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { j as jsxRuntimeExports, H as Helmet, m as motion } from "./entry-server-BVglvtKR.js";
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
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
function PrivacyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Privacy Policy | Jawsome Derby Fun Bus Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Privacy Policy for Jawsome Derby Fun Bus Experience. Learn how we collect, use, and protect your personal information." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Legal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-7xl uppercase text-foreground leading-none mb-4", children: [
        "Privacy",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Policy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground text-sm", children: "Last updated: June 7, 2026" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        variants: stagger,
        className: "max-w-3xl flex flex-col gap-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: 'Jawsome Racing ("we," "us," or "our") operates the Jawsome Derby Fun Bus Experience website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a booking with us. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Information We Collect" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "We may collect information about you in a variety of ways. The information we may collect includes:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Personal Data:" }),
                  " Name, email address, and phone number that you voluntarily provide when making a booking or contacting us."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Booking Information:" }),
                  " Event selections, number of seats, and any special requests or notes submitted through our booking form."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Usage Data:" }),
                  " Information your browser sends automatically, including your IP address, browser type, pages visited, and time spent on the site."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "How We Use Your Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "We use the information we collect to:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3 text-sm text-muted-foreground", children: [
              "Process and confirm your booking requests",
              "Send you booking confirmations and event reminders",
              "Respond to your inquiries and customer service requests",
              "Send promotional communications (only with your consent)",
              "Improve our website and services",
              "Comply with applicable laws and regulations"
            ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Sharing Your Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Service Providers:" }),
                  " We may share information with trusted third-party vendors who assist us in operating our website and conducting our business, subject to confidentiality agreements."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Legal Requirements:" }),
                  " We may disclose your information where required by law or to protect our rights."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Cookies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "We may use cookies and similar tracking technologies to improve your browsing experience on our site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the site may not function properly without cookies." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Data Security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Your Rights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at the information below. We will respond to your request within a reasonable timeframe." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Children's Privacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Changes to This Policy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: 'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. Your continued use of the site after any changes constitutes your acceptance of the new policy.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4 border border-border rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Contact Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "If you have questions or concerns about this Privacy Policy, please contact us:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Jawsome Racing" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Email: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@jawsomederby.com", className: "text-primary hover:brightness-110 transition-colors", children: "hello@jawsomederby.com" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Phone: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+15185550100", className: "text-primary hover:brightness-110 transition-colors", children: "(518) 555-0100" })
              ] })
            ] })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  PrivacyPage as default
};
