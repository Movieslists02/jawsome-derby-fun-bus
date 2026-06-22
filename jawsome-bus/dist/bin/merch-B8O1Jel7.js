import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, H as Helmet, m as motion, S as Star, d as distExports, A as ArrowRight, u as useCart } from "./entry-server-BVglvtKR.js";
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
const ShoppingCart = createLucideIcon("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const MERCH_ITEMS = [
  {
    id: "ladies-pink-tee",
    name: "Ladies' Pink Racing Tee",
    desc: 'Soft premium cotton with rose gold "Jawsome Racing Stable" logo and delicate horse silhouette. The race day essential for the ladies.',
    price: 35,
    tag: "Ladies'",
    img: "https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/f3c342df-6cea-461e-8094-4d32dbff4463/ebdbaf37-original.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    badge: "Fan Favorite"
  },
  {
    id: "slogan-tee",
    name: "Saratoga Slogan Tee",
    desc: '"See You at the Track" — bold vintage racing typography with Saratoga branding. Unisex fit, race day ready.',
    price: 32,
    tag: "Unisex",
    img: "https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/1b00f6d9-9167-4d3b-9032-24116c57c0eb/9be014fb-original.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    badge: null
  },
  {
    id: "racing-cap",
    name: "Jawsome Racing Cap",
    desc: 'Structured black snapback with gold embroidered Jawsome Racing logo. "Saratoga" stitched on the side. One size fits most.',
    price: 38,
    tag: "Accessories",
    img: "https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/fbc1e992-98c2-4e58-b687-a804164eda23/5bcc600a-original.png",
    sizes: ["One Size"],
    badge: "Best Seller"
  },
  {
    id: "race-day-hoodie",
    name: "Race Day Hoodie",
    desc: 'Premium heavyweight hoodie with gold "Jawsome Derby Fun Bus" chest print. Perfect for early mornings at the barn or cool evenings at the track.',
    price: 65,
    tag: "Unisex",
    img: "https://isteam.wsimg.com/genai-assistant/images/eed4027d-534a-4fb1-bb9d-c7e7b123dac9/ce0fed3a-8dd1-4f14-a768-314cb4327f17/25f0b501-original.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    badge: null
  }
];
function ProductCard({ item }) {
  const [selectedSize, setSelectedSize] = reactExports.useState(item.sizes[0]);
  const [added, setAdded] = reactExports.useState(false);
  const { addItem } = useCart();
  function handleAddToCart() {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      priceLabel: `$${item.price}`,
      image: item.img,
      size: selectedSize
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: fadeUp,
      whileHover: { y: -4, transition: { duration: 0.2 } },
      className: "group bg-card border border-border hover:border-primary rounded-lg overflow-hidden flex flex-col transition-all hover:shadow-xl hover:shadow-primary/10",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-white aspect-square", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.img,
              alt: item.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-xs font-bold uppercase tracking-wider bg-primary text-black px-2.5 py-1 rounded", children: item.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 text-xs font-bold uppercase tracking-wider bg-background/90 text-muted-foreground border border-border px-2.5 py-1 rounded", children: item.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-3 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-lg text-foreground leading-tight", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading text-2xl text-primary shrink-0", children: [
              "$",
              item.price
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.desc }),
          item.sizes.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: item.sizes.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setSelectedSize(size),
                className: `text-xs font-semibold px-2.5 py-1 rounded border transition-all ${selectedSize === size ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`,
                children: size
              },
              size
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleAddToCart,
              className: `mt-auto inline-flex items-center justify-center gap-2 py-3 font-bold text-sm uppercase tracking-wider rounded transition-all ${added ? "bg-green-600 text-white" : "bg-primary text-black hover:brightness-110 hover:scale-[1.02]"}`,
              children: added ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Added! ✓" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 14 }),
                " Add to Cart"
              ] })
            }
          )
        ] })
      ]
    }
  );
}
function MerchPage() {
  const [email, setEmail] = reactExports.useState("");
  const [notifySubmitted, setNotifySubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Merch — Jawsome Racing Stable" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Official Jawsome Racing Stable gear. Race Day Hoodie, Jawsome Racing Cap, Saratoga Slogan Tee, Ladies' Pink Racing Tee. Wear the brand." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: { backgroundImage: `url('/assets/horses-racing.jpg')` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, className: "max-w-2xl flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "Official Gear" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-6xl text-white leading-none", children: [
          "Jawsome Racing",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Stable Gear" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-lg text-white/70", children: "Wear the brand. Built for race day." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        className: "flex flex-col gap-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl md:text-4xl text-foreground", children: "The Collection" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "4 pieces. All built for the track." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, className: "text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free shipping on orders over $75" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: stagger,
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
              children: MERCH_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { item }, item.id))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex items-center gap-4 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Ready for race day?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              distExports.Link,
              {
                to: "/book",
                className: "inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:underline",
                children: [
                  "Book Your Spot ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  MerchPage as default
};
