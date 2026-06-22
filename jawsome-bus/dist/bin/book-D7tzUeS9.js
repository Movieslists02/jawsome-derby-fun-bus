import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { c as createLucideIcon, d as distExports, r as reactExports, j as jsxRuntimeExports, H as Helmet, m as motion, U as Users, A as ArrowRight, C as CircleCheckBig, S as Star } from "./entry-server-BVglvtKR.js";
import { E as EVENTS } from "./events-data-DgyGPWbW.js";
import { s as supabase } from "../server.bundle.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "tty";
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
import "fs";
import "node:querystring";
import "node:buffer";
import "node:net";
import "node:url";
import "events";
import "http";
import "https";
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};
function BookPage() {
  const [searchParams] = distExports.useSearchParams();
  const cancelled = searchParams.get("cancelled") === "true";
  const preselectedEvent = searchParams.get("event") ?? "";
  const [step, setStep] = reactExports.useState(preselectedEvent ? "package" : "event");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [stripeUnconfigured, setStripeUnconfigured] = reactExports.useState(false);
  const [liveSeats, setLiveSeats] = reactExports.useState({});
  const [form, setForm] = reactExports.useState({
    eventId: preselectedEvent,
    packageType: "standard",
    quantity: 1,
    customerName: "",
    customerEmail: "",
    customerPhone: ""
  });
  reactExports.useEffect(() => {
    async function loadSeats() {
      const { data, error: error2 } = await supabase.from("events").select("id, total_seats, booked_seats");
      if (error2) {
        console.error("Failed to load booking seats:", error2);
        return;
      }
      const seatMap = {};
      data == null ? void 0 : data.forEach((event) => {
        seatMap[event.id] = Number(event.total_seats) - Number(event.booked_seats);
      });
      setLiveSeats(seatMap);
    }
    loadSeats();
  }, []);
  const selectedEvent = EVENTS.find((e) => e.id === form.eventId);
  const selectedSeatsLeft = selectedEvent ? liveSeats[selectedEvent.id] ?? selectedEvent.seatsLeft : 0;
  const selectedSoldOut = selectedSeatsLeft <= 0;
  const steps = [
    { key: "event", label: "Event" },
    { key: "package", label: "Package" },
    { key: "details", label: "Your Info" },
    { key: "checkout", label: "Review" }
  ];
  const stepIndex = steps.findIndex((s) => s.key === step);
  function selectEvent(event) {
    setForm((f) => ({ ...f, eventId: event.id }));
    setStep("package");
  }
  function selectPackage(pkg) {
    setForm((f) => ({ ...f, packageType: pkg }));
    setStep("details");
  }
  function handleDetailsSubmit(e) {
    e.preventDefault();
    if (!form.customerName || !form.customerEmail) return;
    setStep("checkout");
  }
  async function handleCheckout() {
    if (!selectedEvent) return;
    if (selectedSoldOut) {
      setError("Sorry, this event is sold out.");
      return;
    }
    if (form.quantity > selectedSeatsLeft) {
      setError(`Only ${selectedSeatsLeft} seats remaining.`);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/booking/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: form.eventId,
          seats: form.quantity,
          customer_name: form.customerName,
          customer_email: form.customerEmail,
          customer_phone: form.customerPhone
        })
      });
      const data = await res.json();
      if (data.error === "stripe_not_configured") {
        setStripeUnconfigured(true);
        setLoading(false);
        return;
      }
      if (!res.ok || !data.url) throw new Error(data.message || "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(String(err));
      setLoading(false);
    }
  }
  const unitPrice = form.packageType === "vip" ? (selectedEvent == null ? void 0 : selectedEvent.vipPrice) ?? 295 : (selectedEvent == null ? void 0 : selectedEvent.price) ?? 195;
  const total = unitPrice * form.quantity;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Book Your Spot — Jawsome Racing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Reserve your seat on the Jawsome Racing Fun Bus to Saratoga. Limited spots available." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl", children: [
      cancelled && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "mb-8 flex items-center gap-3 bg-muted border border-border rounded-lg px-5 py-4 text-sm text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 16, className: "text-primary shrink-0" }),
            "Your booking was cancelled. No charge was made — you can start again below."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: fadeUp, className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "Secure Your Seat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-4xl md:text-5xl text-foreground mt-2 leading-none", children: "Book Your Spot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Limited seats per event — don't wait." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0 mb-10", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${i <= stepIndex ? "text-primary" : "text-muted-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${i < stepIndex ? "bg-primary border-primary text-black" : i === stepIndex ? "border-primary text-primary" : "border-border text-muted-foreground"}`, children: i < stepIndex ? "✓" : i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider hidden sm:block", children: s.label })
        ] }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 h-px mx-3 transition-colors ${i < stepIndex ? "bg-primary" : "bg-border"}` })
      ] }, s.key)) }),
      step === "event" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: fadeUp, className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl text-foreground", children: "Choose Your Event" }),
        EVENTS.map((event) => {
          const eventSeatsLeft = liveSeats[event.id] ?? event.seatsLeft;
          const isSoldOut = eventSeatsLeft <= 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: isSoldOut,
              onClick: () => !isSoldOut && selectEvent(event),
              className: `group text-left bg-card border border-border rounded-lg overflow-hidden transition-all ${isSoldOut ? "opacity-60 cursor-not-allowed" : "hover:border-primary hover:shadow-lg hover:shadow-primary/10"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:w-48 h-36 sm:h-auto shrink-0 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: event.imgSlot, alt: event.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/30" }),
                  event.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 text-xs font-bold uppercase tracking-wider bg-primary text-black px-2 py-0.5 rounded", children: event.badge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-2 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-xl text-foreground leading-tight", children: event.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-2xl text-primary shrink-0", children: [
                      "$",
                      event.price
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold uppercase tracking-wider", children: event.dateDisplay }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: event.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13, className: "text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-semibold ${(liveSeats[event.id] ?? event.seatsLeft) <= 10 ? "text-red-400" : "text-muted-foreground"}`, children: [
                      liveSeats[event.id] ?? event.seatsLeft,
                      " seats left"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-primary font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1", children: isSoldOut ? "SOLD OUT" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Select ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                    ] }) })
                  ] })
                ] })
              ] })
            },
            event.id
          );
        })
      ] }),
      step === "package" && selectedEvent && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: fadeUp, className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep("event"), className: "text-xs text-muted-foreground hover:text-primary transition-colors mb-3", children: "← Back to events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl text-foreground", children: "Choose Your Package" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
            selectedEvent.title,
            " · ",
            selectedEvent.dateDisplay
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => selectPackage("standard"),
              className: "group text-left bg-card border border-border hover:border-primary rounded-lg p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:shadow-primary/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Standard" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl text-foreground mt-1", children: "The Full Experience" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: ["Round trip bus transportation", "Racetrack admission", "Food & drinks on board"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 14, className: "text-primary shrink-0" }),
                  " ",
                  item
                ] }, item)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-end justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-3xl text-foreground", children: [
                    "$",
                    selectedEvent.price
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1", children: [
                    "Select ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => selectPackage("vip"),
              className: "group text-left bg-card border-2 border-primary rounded-lg p-6 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl", children: "VIP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Premium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl text-foreground mt-1", children: "VIP Package" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: ["Everything in Standard", "Priority seating on the bus", "Premium race day experience", "Exclusive VIP treatment"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-primary shrink-0" }),
                  " ",
                  item
                ] }, item)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-primary uppercase tracking-wider", children: "⚡ Spots sell out fast" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-end justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-3xl text-foreground", children: [
                    "$",
                    selectedEvent.vipPrice
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1", children: [
                    "Select ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] }),
      step === "details" && selectedEvent && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: fadeUp, className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep("package"), className: "text-xs text-muted-foreground hover:text-primary transition-colors mb-3", children: "← Back to packages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl text-foreground", children: "Your Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
            selectedEvent.title,
            " · ",
            form.packageType === "vip" ? "VIP Package" : "Standard Package"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleDetailsSubmit, className: "flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: form.customerName,
                  onChange: (e) => setForm((f) => ({ ...f, customerName: e.target.value })),
                  placeholder: "John Smith",
                  className: "bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                  value: form.customerEmail,
                  onChange: (e) => setForm((f) => ({ ...f, customerEmail: e.target.value })),
                  placeholder: "john@example.com",
                  className: "bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                  value: form.customerPhone,
                  onChange: (e) => setForm((f) => ({ ...f, customerPhone: e.target.value })),
                  placeholder: "(555) 000-0000",
                  className: "bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Number of Seats" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    value: form.quantity,
                    onChange: (e) => setForm((f) => ({ ...f, quantity: Number(e.target.value) })),
                    disabled: selectedSoldOut,
                    className: "w-full appearance-none bg-card border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors pr-10 disabled:opacity-60 disabled:cursor-not-allowed",
                    children: Array.from(
                      { length: Math.max(1, Math.min(selectedSeatsLeft, 8)) },
                      (_, i) => i + 1
                    ).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
                      n,
                      " ",
                      n === 1 ? "seat" : "seats"
                    ] }, n))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted border border-border rounded-lg p-5 flex flex-col gap-2 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1", children: "Order Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: selectedEvent.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: form.packageType === "vip" ? "VIP" : "Standard" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                "$",
                unitPrice,
                " × ",
                form.quantity,
                " seat",
                form.quantity > 1 ? "s" : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                "$",
                total
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border mt-2 pt-2 flex justify-between font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-heading text-xl", children: [
                "$",
                total
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "inline-flex items-center justify-center gap-2 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-[1.02]",
              children: [
                "Continue to Review ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          )
        ] })
      ] }),
      step === "checkout" && selectedEvent && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: fadeUp, className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep("details"), className: "text-xs text-muted-foreground hover:text-primary transition-colors mb-3", children: "← Back to details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl text-foreground", children: "Review Your Order" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg divide-y divide-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Event" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: selectedEvent.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary", children: selectedEvent.dateDisplay })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Package" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: form.packageType === "vip" ? "VIP Package" : "Standard Package" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Guest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: form.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: form.customerEmail }),
            form.customerPhone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: form.customerPhone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                form.quantity,
                " seat",
                form.quantity > 1 ? "s" : "",
                " × $",
                unitPrice
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-3xl text-primary", children: [
              "$",
              total
            ] })
          ] })
        ] }),
        stripeUnconfigured && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-muted border border-border rounded-lg p-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 16, className: "text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Payment not yet configured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5", children: "Add your Stripe API keys in Settings → Secrets to enable live payments. Your booking details are ready to go." })
          ] })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-muted border border-border rounded-lg p-4 text-sm text-red-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 16, className: "shrink-0" }),
          " ",
          error
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleCheckout,
            disabled: loading || selectedSoldOut,
            className: "inline-flex items-center justify-center gap-2 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100",
            children: selectedSoldOut ? "Sold Out" : loading ? "Redirecting to payment..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Confirm & Pay $",
                total
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Secure checkout powered by Stripe. Your card details are never stored on our servers." })
      ] })
    ] }) })
  ] });
}
export {
  BookPage as default
};
