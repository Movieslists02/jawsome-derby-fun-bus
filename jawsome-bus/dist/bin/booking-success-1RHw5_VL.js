import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { r as reactExports, j as jsxRuntimeExports, C as CircleCheckBig } from "./entry-server-BVglvtKR.js";
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
function BookingSuccess() {
  const [status, setStatus] = reactExports.useState("Confirming your booking...");
  reactExports.useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    if (!sessionId) {
      setStatus("Missing payment session.");
      return;
    }
    fetch("/api/stripe/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ session_id: sessionId })
    }).then((res) => res.json()).then((data) => {
      if (data.success) {
        setStatus("Your seats are reserved. A confirmation email has been sent.");
      } else {
        setStatus(data.error || "Payment confirmed, but booking update failed.");
      }
    }).catch(() => {
      setStatus("Payment confirmed, but booking update failed.");
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-background flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 86, className: "text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-heading text-5xl md:text-7xl uppercase leading-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Booking " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Confirmed" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-muted-foreground", children: status }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/events",
          className: "inline-flex items-center justify-center px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded hover:brightness-110 transition",
          children: "Back to Events"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center px-10 py-4 border border-border text-white font-semibold rounded hover:border-primary transition",
          children: "Back Home"
        }
      )
    ] })
  ] }) });
}
export {
  BookingSuccess as default
};
