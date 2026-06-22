import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { c as createLucideIcon, j as jsxRuntimeExports, H as Helmet, A as ArrowRight, d as distExports, U as Users, C as CircleCheckBig } from "./entry-server-BVglvtKR.js";
import { C as Calendar } from "./calendar-B7TE69T2.js";
import { H as Heart } from "./heart-7Vm5ixAL.js";
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
const Hotel = createLucideIcon("Hotel", [
  ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
  ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShieldCheck = createLucideIcon("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const registerLink = "#";
const includes = [
  "Three-night hotel stay: check in Thursday, check out Sunday",
  "Welcome drinks Thursday at the hotel",
  "Experience Kentucky Tour with Buffalo Trace distillery and Lane’s End horse farm",
  "Lunch included on Friday tour",
  "Reserved seats for the 153rd Kentucky Derby",
  "Food and drinks included on Derby Day",
  "Round-trip Derby transportation to and from Churchill Downs",
  "Pre-trip planning, on-site host, and local assistance",
  "All taxes and service charges included"
];
const seating = [
  {
    title: "1st Floor Clubhouse",
    desc: "Sections 113–117. Close to the finish line and close to the action.",
    prices: [
      "Hyatt Regency, Lexington: $3,995 per person",
      "Holiday Inn Express, Louisville: $4,795 per person",
      "Galt House Hotel, Louisville: $6,295 per person",
      "Grady Hotel, Louisville: $7,795 per person"
    ]
  },
  {
    title: "3rd Floor Grandstand Under Cover",
    desc: "Sections 323–325, Row C or higher. Better elevated track view.",
    prices: [
      "Hyatt Regency, Lexington: $4,650 per person",
      "Holiday Inn Express, Louisville: $5,395 per person",
      "Galt House Hotel, Louisville: $6,895 per person",
      "Grady Hotel, Louisville: $8,395 per person"
    ]
  },
  {
    title: "3rd Floor Clubhouse Under Cover",
    desc: "Sections 316–322, Row C or higher. Great people watching and clubhouse access.",
    prices: [
      "Hyatt Regency, Lexington: $5,450 per person",
      "Holiday Inn Express, Louisville: $6,195 per person",
      "Galt House Hotel, Louisville: $7,695 per person",
      "Grady Hotel, Louisville: $9,195 per person"
    ]
  }
];
function DerbyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Kentucky Derby 2027 | Jawsome Derby Fun Bus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Kentucky Derby 2027 travel packages, group discounts, payment plans, hotel options, reserved Derby seats, and Tunnel to Towers give back."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-[85vh] flex items-center bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "April 29 – May 2, 2027 • Louisville, Kentucky" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-heading text-5xl md:text-7xl uppercase text-foreground leading-none", children: [
        "Kentucky Derby ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "2027 Experience" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-3xl", children: "Big hats, celebrity parties, bourbon tasting, high fashion, people watching, and thrilling horse racing. Whether you are new to racing or a seasoned fan, Derby weekend is a bucket-list experience." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-primary/40 rounded px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground uppercase tracking-widest", children: "Starting At" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-3xl text-primary", children: "$4,999" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm ml-1", children: "per person" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-primary/40 rounded px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground uppercase tracking-widest", children: "Group Offer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-3xl text-primary", children: "10% Off" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: registerLink,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase rounded hover:brightness-110 transition-all",
            children: [
              "Register Through Bucket List Events ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          distExports.Link,
          {
            to: "/contact",
            className: "inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-bold uppercase rounded hover:border-primary hover:text-primary transition-all",
            children: "Request Information"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "text-primary mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl uppercase", children: "Local Kentucky Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "Hosted by a team with Kentucky connections, including access to major Derby weekend experiences." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "text-primary mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl uppercase", children: "Transportation Solved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "Derby transportation can be difficult. Guests receive round-trip transportation close to Churchill Downs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "text-primary mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-2xl uppercase", children: "Covered Seat Advice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "Guests are encouraged to choose seats under cover to protect from sun or rain." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-card/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Package Includes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl md:text-5xl uppercase text-foreground mb-10", children: "Everything Included" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 border border-border rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "text-primary shrink-0", size: 20 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: item })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3", children: "Seating Options" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl md:text-5xl uppercase text-foreground mb-10", children: "Derby Packages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: seating.map((seat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-3xl uppercase text-foreground", children: seat.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: seat.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 mt-2", children: seat.prices.map((price) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground border-t border-border pt-2", children: price }, price)) })
      ] }, seat.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-6", children: "Pricing is based on double occupancy. Single, triple, or quadruple pricing may be available by request." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-card/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "text-primary mb-4", size: 36 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Hotel Options" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hyatt Regency, Lexington" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Holiday Inn Express, Louisville" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Galt House Hotel, Louisville" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Grady Hotel, Louisville" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "text-primary mb-4", size: 36 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl uppercase text-foreground", children: "Payment Plans Available" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Flexible payment plans are available through Bucket List Events. Guests can make a deposit and complete automatic monthly payments for the balance." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-primary/40 rounded-lg p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "text-primary mb-4", size: 42 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl uppercase text-foreground", children: "Tunnel to Towers Give Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-3xl", children: "Jawsome Racing will highlight that 15% is given back in support of Tunnel to Towers, honoring the memory of the 9/11 victims and those who sacrificed." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl md:text-6xl uppercase text-foreground", children: "Ready for Derby Weekend?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Register through Bucket List Events or contact us for group questions and package guidance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: registerLink,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase rounded hover:brightness-110 transition-all",
            children: [
              "Register Through Bucket List Events ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          distExports.Link,
          {
            to: "/contact",
            className: "inline-flex items-center px-8 py-4 border border-border text-foreground font-bold uppercase rounded hover:border-primary hover:text-primary transition-all",
            children: "Request Information"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  DerbyPage as default
};
