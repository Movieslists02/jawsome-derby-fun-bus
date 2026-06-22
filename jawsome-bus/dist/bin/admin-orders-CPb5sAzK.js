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
  var _a;
  const [code, setCode] = reactExports.useState("");
  const [authorized, setAuthorized] = reactExports.useState(false);
  const [orders, setOrders] = reactExports.useState([]);
  const [message, setMessage] = reactExports.useState("");
  const [selectedOrder, setSelectedOrder] = reactExports.useState(null);
  async function loadOrders() {
    const res = await fetch(`/api/admin/orders?code=${ADMIN_CODE}`);
    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error || "Failed to load orders");
      return;
    }
    setOrders(data.orders || []);
  }
  reactExports.useEffect(() => {
    if (authorized) loadOrders();
  }, [authorized]);
  if (!authorized) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (code === ADMIN_CODE) {
            setAuthorized(true);
          } else {
            setMessage("Wrong admin code.");
          }
        },
        className: "bg-card p-6 rounded-lg border border-border w-full max-w-md",
        children: [
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
          message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-red-400", children: message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "mt-4 w-full bg-primary text-black font-bold p-3 rounded",
              children: "Login"
            }
          )
        ]
      }
    ) });
  }
  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total_amount || 0),
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-white p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-2", children: "Admin Orders" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "View paid merch and checkout orders." }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded border border-border bg-card p-3 text-sm", children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 bg-card border border-border rounded-lg p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Revenue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-primary", children: [
        "$",
        totalRevenue
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto bg-card border border-border rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Order #" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Stripe Session" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-4", children: "Total" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        orders.map((order) => {
          var _a2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              onClick: () => setSelectedOrder(order),
              className: "border-b border-border cursor-pointer hover:bg-card/50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: order.created_at ? new Date(order.created_at).toLocaleString() : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-bold text-primary", children: order.order_number || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: order.customer_email || "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground", children: (_a2 = order.order_items) == null ? void 0 : _a2.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    item.quantity,
                    " × ",
                    item.name,
                    " — $",
                    item.price
                  ] }, index)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-xs text-muted-foreground", children: order.stripe_session_id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: order.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-right font-bold text-primary", children: [
                  "$",
                  order.total_amount
                ] })
              ]
            },
            order.id
          );
        }),
        orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-6 text-center text-muted-foreground", colSpan: 6, children: "No orders found." }) })
      ] })
    ] }) }),
    selectedOrder && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-6 w-full max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold", children: [
          "Order ",
          selectedOrder.order_number
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedOrder(null),
            className: "text-red-400",
            children: "Close"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Customer:" }),
        " ",
        selectedOrder.customer_email
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Status:" }),
        " ",
        selectedOrder.status
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total:" }),
        " $",
        selectedOrder.total_amount
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-4 border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Shipping / Printful" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Shipping:" }),
        " ",
        selectedOrder.shipping_status || "Pending"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Printful Order ID:" }),
        " ",
        selectedOrder.printful_order_id || "—"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Carrier:" }),
        " ",
        selectedOrder.carrier || "—"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tracking:" }),
        " ",
        selectedOrder.tracking_url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: selectedOrder.tracking_url,
            target: "_blank",
            rel: "noreferrer",
            className: "text-primary underline",
            children: "Track Package"
          }
        ) : selectedOrder.tracking_number || "—"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-4 border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Purchased Items" }),
      (_a = selectedOrder.order_items) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mb-2 border-b border-border pb-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
              "Qty: ",
              item.quantity
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
              "Price: $",
              item.price
            ] })
          ]
        },
        index
      ))
    ] }) })
  ] });
}
export {
  AdminOrdersPage as default
};
