import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { j as jsxRuntimeExports, H as Helmet, m as motion, U as Users, T as Trophy, S as Star, d as distExports, A as ArrowRight } from "./entry-server-BVglvtKR.js";
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
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Our Story — Jawsome Racing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "From family trips to the track to building the Jawsome Racing Stable. The origin story of a real racing brand built on passion, connections, and that lucky win day." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center",
          style: { backgroundImage: `url('/assets/vip-experience.jpg')` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, className: "max-w-2xl flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "The Origin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { variants: fadeUp, className: "font-heading text-5xl md:text-6xl text-white leading-none", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-lg text-white/70 max-w-lg", children: "Built on family, racing, and that one day that changed everything." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        className: "flex flex-col gap-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 16, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "How It Started" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl md:text-4xl text-foreground leading-tight", children: "Family Trips to the Track" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It started the way most great things do — with family. Going to the track wasn't just a day out. It was a ritual. The smell of the turf, the sound of hooves on dirt, the electricity in the grandstand before a big race. It got into our blood early and never left." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Saratoga has a magic that's hard to explain to someone who hasn't been. It's not just horse racing — it's a whole world. The history, the tradition, the community. Every summer, we'd make the trip, and every summer it meant more than the last." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-px bg-primary/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "Going Deeper" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl md:text-4xl text-foreground leading-tight", children: "Meeting the People Behind Racing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Over time, we started meeting the real people who make the sport run. Trainers who've spent decades at Saratoga and Belmont. Exercise riders who are at the barn before sunrise. Hot walkers who know every horse by name and personality." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These relationships changed how we saw racing. It stopped being just a spectator sport and became something we were genuinely part of. The more we learned, the more we wanted to be involved — not just watching from the grandstand, but building something real inside the sport." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-px bg-primary/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 16, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "The Turning Point" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl md:text-4xl text-foreground leading-tight", children: "That Lucky Win Day" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Then came that day. The kind of day at the track that you remember for the rest of your life. The right horse, the right race, the right moment. A win that felt like more than luck — it felt like a sign." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "That day didn't just put money in our pocket. It sparked something. A clarity about what we wanted to build and why. Racing had given us so much — the memories, the connections, the community — and it was time to give something back. To create an experience that others could share." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-2 border-primary pl-6 py-2 my-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-2xl text-foreground italic leading-snug", children: '"That day reminded us why we fell in love with racing in the first place."' }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-px bg-primary/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "What We're Building" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl md:text-4xl text-foreground leading-tight", children: "Now Building Something Bigger" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Jawsome Racing Fun Bus is just the beginning. We're building a brand — a community of people who love racing the way we do. People who want more than a ticket to the track. They want the full experience." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "And beyond the Fun Bus, we're building the Jawsome Racing Stable. Real connections with trainers at Saratoga and Belmont. A growing team of racing professionals. And eventually, a racing investment group for those who want a real stake in the sport." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-2xl text-primary", children: "Now building something bigger." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        className: "flex flex-col gap-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "The Vision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl md:text-4xl text-foreground mt-2 leading-none", children: "Building the Jawsome Racing Stable" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: stagger, className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: [
            { icon: Trophy, title: "Trainer Connections", desc: "Deep relationships with trainers at Saratoga and Belmont. We know the people who know the horses." },
            { icon: Users, title: "Growing Team", desc: "Building our crew — hot walkers, exercise riders, and racing professionals joining the Jawsome family." },
            { icon: Star, title: "Investment Group", desc: "Forming a racing investment group for those who want more than a seat — they want a stake in the sport." }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "bg-card border border-border rounded-lg p-7 flex flex-col gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 18, className: "text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-xl text-foreground", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.desc })
              ]
            },
            item.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              distExports.Link,
              {
                to: "/book",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded transition-all hover:brightness-110 hover:scale-105",
                children: [
                  "Book Your Spot ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              distExports.Link,
              {
                to: "/contact",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-muted-foreground hover:border-primary hover:text-primary font-bold text-sm uppercase tracking-wider rounded transition-all",
                children: "Get in Touch"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  AboutPage as default
};
