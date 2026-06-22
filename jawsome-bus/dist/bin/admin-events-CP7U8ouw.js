import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { r as reactExports, j as jsxRuntimeExports } from "./entry-server-BVglvtKR.js";
import { A as ADMIN_CODE } from "./admin-auth-Bzxal_Z-.js";
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
function AdminEventsPage() {
  const [code, setCode] = reactExports.useState("");
  const [authorized, setAuthorized] = reactExports.useState(false);
  const [events, setEvents] = reactExports.useState([]);
  const [message, setMessage] = reactExports.useState("");
  async function loadEvents() {
    const { data, error } = await supabase.from("events").select("id, title, total_seats, booked_seats, status").order("title");
    if (error) {
      setMessage(error.message);
      return;
    }
    setEvents(data || []);
  }
  reactExports.useEffect(() => {
    if (authorized) loadEvents();
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
  async function saveEvent(event) {
    setMessage("Saving...");
    try {
      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: ADMIN_CODE,
          event
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Save failed");
        return;
      }
      setMessage("Saved successfully.");
      loadEvents();
    } catch (error) {
      console.error(error);
      setMessage("Save failed. Check server route /api/admin/events.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-white p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-2", children: "Admin Events" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Manage event seats and status." }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded border border-border bg-card p-3 text-sm", children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: events.map((event, index) => {
      const seatsLeft = Number(event.total_seats || 0) - Number(event.booked_seats || 0);
      const revenue = Number(event.booked_seats || 0) * 195;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-2", children: event.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
          seatsLeft,
          " seats left · ",
          event.booked_seats,
          " booked · ",
          event.total_seats,
          " total · Revenue: $",
          revenue
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
            "Total Seats",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: event.total_seats,
                onChange: (e) => {
                  const copy = [...events];
                  copy[index].total_seats = Number(e.target.value);
                  setEvents(copy);
                },
                className: "mt-1 w-full p-3 rounded bg-background border border-border"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
            "Booked Seats",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: event.booked_seats,
                onChange: (e) => {
                  const copy = [...events];
                  copy[index].booked_seats = Number(e.target.value);
                  setEvents(copy);
                },
                className: "mt-1 w-full p-3 rounded bg-background border border-border"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
            "Status",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: event.status || "active",
                onChange: (e) => {
                  const copy = [...events];
                  copy[index].status = e.target.value;
                  setEvents(copy);
                },
                className: "mt-1 w-full p-3 rounded bg-background border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "active" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sold_out", children: "sold_out" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "completed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "cancelled" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "draft", children: "draft" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hidden", children: "hidden" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => saveEvent(event),
              className: "px-5 py-3 bg-primary text-black font-bold rounded",
              children: "Save"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => saveEvent({ ...event, status: "sold_out" }),
              className: "px-5 py-3 border border-border rounded",
              children: "Mark Sold Out"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => saveEvent({ ...event, status: "completed" }),
              className: "px-5 py-3 border border-border rounded",
              children: "Complete Event"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => saveEvent({ ...event, booked_seats: 0, status: "active" }),
              className: "px-5 py-3 border border-border rounded",
              children: "Reopen"
            }
          )
        ] })
      ] }, event.id);
    }) })
  ] });
}
export {
  AdminEventsPage as default
};
