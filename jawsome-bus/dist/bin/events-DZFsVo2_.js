import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { r as reactExports, j as jsxRuntimeExports, H as Helmet, m as motion, d as distExports, A as ArrowRight, U as Users } from "./entry-server-BVglvtKR.js";
import { E as EVENTS } from "./events-data-DgyGPWbW.js";
import { s as supabase } from "../server.bundle.mjs";
import { C as Calendar } from "./calendar-B7TE69T2.js";
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
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
function SeatBar({ total, left }) {
  const booked = total - left;
  const bookedPct = Math.round(booked / total * 100);
  const leftPct = Math.round(left / total * 100);
  const color = left <= 10 ? "bg-red-500" : left <= 24 ? "bg-yellow-500" : "bg-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        left,
        " seats remaining"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        booked,
        " booked"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-border rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full rounded-full transition-all ${color}`,
        style: { width: `${bookedPct}%` },
        title: `${booked} of ${total} seats booked`
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        leftPct,
        "% available"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        bookedPct,
        "% booked"
      ] })
    ] })
  ] });
}
function EventsPage() {
  const [liveSeats, setLiveSeats] = reactExports.useState({});
  reactExports.useEffect(() => {
    async function loadSeats() {
      const { data, error } = await supabase.from("events").select("id, total_seats, booked_seats");
      if (error) {
        console.error("Failed to load event seats:", error);
        return;
      }
      const seatMap = {};
      data == null ? void 0 : data.forEach((event) => {
        seatMap[event.id] = event.total_seats - event.booked_seats;
      });
      setLiveSeats(seatMap);
    }
    loadSeats();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Race Day Events — Jawsome Racing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Browse all Saratoga race day events. Book your Fun Bus seat for Opening Weekend, Travers Stakes, and special event days."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: { backgroundImage: `url('/assets/hero.jpg')` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          animate: "visible",
          variants: stagger,
          className: "max-w-2xl flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                variants: fadeUp,
                className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
                children: "2026 Season"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                variants: fadeUp,
                className: "font-heading text-5xl md:text-6xl text-white leading-none",
                children: "Race Day Events"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-lg text-white/70", children: "Pick your race day. Seats are limited — once they're gone, they're gone." })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          className: "flex flex-col gap-6",
          children: EVENTS.map((event) => {
            const seatsLeft = liveSeats[event.id] ?? event.seatsLeft;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: fadeUp,
                whileHover: { y: -3, transition: { duration: 0.2 } },
                className: "group bg-card border border-border hover:border-primary rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:w-72 h-52 md:h-auto shrink-0 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: event.imgSlot,
                        alt: event.title,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-black/30 md:block hidden" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" }),
                    event.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-xs font-bold uppercase tracking-wider bg-primary text-black px-2.5 py-1 rounded", children: event.badge })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 md:p-8 flex flex-col gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl md:text-3xl text-foreground leading-tight", children: event.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-primary font-semibold uppercase tracking-wider", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
                          " ",
                          event.dateDisplay
                        ] }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-4xl text-primary", children: [
                          "$",
                          event.price
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "per person" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: event.longDescription }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SeatBar, { total: event.totalSeats, left: seatsLeft }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Round trip bus", "Admission included", "Food & drinks"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs border border-border text-muted-foreground px-3 py-1 rounded-full",
                        children: item
                      },
                      item
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-auto pt-2", children: [
                      seatsLeft <= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          disabled: true,
                          className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded cursor-not-allowed opacity-80",
                          children: "Sold Out"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        distExports.Link,
                        {
                          to: `/book?event=${event.id}`,
                          className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider rounded transition-all hover:brightness-110 hover:scale-105",
                          children: [
                            "Reserve Your Spot ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: seatsLeft <= 10 ? "text-red-400 font-semibold" : "", children: seatsLeft <= 0 ? "Sold out" : seatsLeft <= 10 ? `Only ${seatsLeft} seats left!` : `${seatsLeft} seats available` })
                      ] })
                    ] })
                  ] })
                ] })
              },
              event.id
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          className: "mt-12 bg-muted border border-border rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl text-foreground", children: "Booking for a group?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Groups of 8+ get special rates. Contact the event team to arrange a group booking." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              distExports.Link,
              {
                to: "/contact",
                className: "shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-bold text-sm uppercase tracking-wider rounded transition-all hover:bg-primary hover:text-black",
                children: [
                  "Contact Us ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  EventsPage as default
};
