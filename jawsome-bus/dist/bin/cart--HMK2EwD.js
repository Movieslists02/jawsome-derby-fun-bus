import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { c as createLucideIcon, u as useCart, j as jsxRuntimeExports, H as Helmet, m as motion, a as ShoppingBag, d as distExports } from "./entry-server-BVglvtKR.js";
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
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Your Cart | Jawsome Derby Fun Bus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Review your Jawsome Derby merchandise cart and proceed to checkout." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4", children: "Your Order" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-7xl uppercase text-foreground leading-none", children: [
        "Shopping",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Cart" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col items-center justify-center py-24 gap-6 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 border-2 border-border rounded-full flex items-center justify-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 32 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl uppercase text-foreground", children: "Your Cart Is Empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-sm", children: "Looks like you haven't added anything yet. Head over to the merch shop to find something you love." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            distExports.Link,
            {
              to: "/merch",
              className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 transition-all",
              children: "Shop Merch"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          animate: "visible",
          variants: stagger,
          className: "lg:col-span-2 flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                totalItems,
                " item",
                totalItems !== 1 ? "s" : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(distExports.Link, { to: "/merch", className: "text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 12 }),
                " Continue Shopping"
              ] })
            ] }),
            items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: fadeUp,
                layout: true,
                className: "flex gap-4 border border-border rounded-lg p-4 hover:border-primary/50 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.image,
                      alt: item.name,
                      className: "w-20 h-20 object-cover rounded border border-border shrink-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-xl uppercase text-foreground leading-tight", children: item.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                          "Size: ",
                          item.size
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-xl text-primary shrink-0", children: [
                        "$",
                        item.price * item.quantity
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => updateQuantity(item.id, item.size, item.quantity - 1),
                            className: "w-7 h-7 border border-border rounded flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all text-sm font-bold",
                            children: "−"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-xl text-foreground w-6 text-center", children: item.quantity }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => updateQuantity(item.id, item.size, item.quantity + 1),
                            className: "w-7 h-7 border border-border rounded flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all text-sm font-bold",
                            children: "+"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => removeItem(item.id, item.size),
                          className: "text-muted-foreground hover:text-red-400 transition-colors p-1",
                          "aria-label": "Remove item",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
                        }
                      )
                    ] })
                  ] })
                ]
              },
              `${item.id}-${item.size}`
            ))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "flex flex-col gap-4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg p-6 flex flex-col gap-4 sticky top-32", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl uppercase text-foreground", children: "Order Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 text-sm", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                item.name,
                " × ",
                item.quantity
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Calculated at checkout" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Estimated Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-3xl text-primary", children: [
                "$",
                totalPrice
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              distExports.Link,
              {
                to: "/checkout",
                className: "inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-black font-bold text-sm tracking-widest uppercase rounded hover:brightness-110 hover:scale-105 transition-all",
                children: [
                  "Proceed to Checkout ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Secure checkout. Guest checkout available." })
          ] })
        }
      )
    ] }) }) })
  ] });
}
export {
  CartPage as default
};
