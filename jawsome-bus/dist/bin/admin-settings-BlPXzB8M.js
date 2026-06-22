import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { r as reactExports, j as jsxRuntimeExports } from "./entry-server-BVglvtKR.js";
import { A as ADMIN_CODE } from "./admin-auth-Bzxal_Z-.js";
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
function AdminOrdersPage() {
  const [code, setCode] = reactExports.useState("");
  const [authorized, setAuthorized] = reactExports.useState(false);
  if (!authorized) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border border-border w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Admin Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "password",
          value: code,
          onChange: (e) => setCode(e.target.value),
          placeholder: "Enter access code",
          className: "w-full p-3 rounded bg-background border border-border"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            if (code === ADMIN_CODE) {
              setAuthorized(true);
            }
          },
          className: "mt-4 w-full bg-primary text-black font-bold p-3 rounded",
          children: "Login"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-white p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold", children: "Admin Settings" }) });
}
export {
  AdminOrdersPage as default
};
