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
function TermsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Terms of Service | Jawsome Derby Fun Bus Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Terms of Service for Jawsome Derby Fun Bus Experience. Please read these terms carefully before booking or using our services." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Legal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-7xl uppercase text-foreground leading-none mb-4", children: [
        "Terms of",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Service" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Agreement to Terms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "By accessing our website or booking a seat on the Jawsome Derby Fun Bus Experience, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. These terms apply to all visitors, users, and customers." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Booking & Reservations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "All bookings are subject to availability. Submitting a booking request does not guarantee a confirmed seat until you receive written confirmation from us." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "You must be 18 years of age or older to make a booking. Guests under 21 may not consume alcohol on board, in accordance with applicable law." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "You are responsible for providing accurate contact information at the time of booking. We are not liable for missed communications due to incorrect details." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Group bookings of 10 or more are subject to separate group rate terms communicated at the time of inquiry." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Cancellations & Refunds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "14+ days before the event:" }),
                  " Full refund, minus any processing fees."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "7–13 days before the event:" }),
                  " 50% refund or full credit toward a future event."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Less than 7 days before the event:" }),
                  " No refund. Seat transfers to another person are permitted with advance notice."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "If Jawsome Racing cancels an event due to circumstances within our control, you will receive a full refund or credit. We are not responsible for cancellations due to weather, track closures, or other circumstances beyond our control." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Conduct on Board" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm mb-2", children: "All passengers are expected to behave in a respectful and lawful manner. Jawsome Racing reserves the right to remove any passenger from the bus — without refund — for behavior that is disruptive, threatening, or endangers the safety of others, including:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3 text-sm text-muted-foreground", children: [
              "Excessive intoxication or disruptive behavior",
              "Harassment or threatening conduct toward other passengers or staff",
              "Damage to the vehicle or property",
              "Violation of any applicable laws"
            ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold shrink-0", children: "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "What's Included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "Each ticket includes round trip bus transportation, food and non-alcoholic beverages on board, and general admission to Saratoga Race Course. Alcoholic beverages may be available on board for guests 21 and older. Ticket prices do not include personal wagers, premium seating upgrades at the track, or any purchases made at the venue." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Liability Disclaimer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "Participation in the Jawsome Derby Fun Bus Experience is at your own risk. Jawsome Racing is not liable for any personal injury, loss, or damage to personal property that occurs during the event, on the bus, or at the racetrack, except where caused by our gross negligence. By booking, you acknowledge and accept these risks." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Intellectual Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "All content on this website — including text, graphics, logos, and images — is the property of Jawsome Racing and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Governing Law" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "These Terms of Service are governed by and construed in accordance with the laws of the State of New York. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Albany County, New York." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Changes to These Terms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site or our services after any changes constitutes your acceptance of the revised terms." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4 border border-border rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Contact Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "If you have questions about these Terms of Service, please reach out:" }),
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
  TermsPage as default
};
