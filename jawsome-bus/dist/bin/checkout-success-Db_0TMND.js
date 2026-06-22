import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { u as useCart, r as reactExports, j as jsxRuntimeExports, C as CircleCheckBig, d as distExports } from "./entry-server-BVglvtKR.js";
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
function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  reactExports.useEffect(() => {
    clearCart();
    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    if (!sessionId) return;
    fetch("/api/stripe/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ session_id: sessionId })
    }).catch((error) => {
      console.error("Merch webhook call failed:", error);
    });
  }, [clearCart]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-screen flex items-center justify-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 86, className: "text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-heading text-5xl md:text-7xl uppercase text-foreground", children: [
      "Order ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Confirmed" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl mx-auto", children: "Thank you for supporting Jawsome Racing. Your order has been received and is being processed." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        distExports.Link,
        {
          to: "/merch",
          className: "px-8 py-4 bg-primary text-black font-bold uppercase rounded hover:brightness-110 transition-all",
          children: "Continue Shopping"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        distExports.Link,
        {
          to: "/",
          className: "px-8 py-4 border border-border text-foreground rounded hover:border-primary hover:text-primary transition-all",
          children: "Back Home"
        }
      )
    ] })
  ] }) });
}
export {
  CheckoutSuccessPage as default
};
