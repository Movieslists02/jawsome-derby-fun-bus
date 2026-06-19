import { useEffect, useState } from "react";
import { ADMIN_CODE } from "@/lib/admin-auth";
import { supabase } from "@/lib/supabase";

type EventRow = {
  id: string;
  title: string;
  total_seats: number;
  booked_seats: number;
  status: string;
};

export default function AdminEventsPage() {
  const [code, setCode] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [message, setMessage] = useState("");

  async function loadEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("id, title, total_seats, booked_seats, status")
      .order("title");

    if (error) {
      setMessage(error.message);
      return;
    }

    setEvents(data || []);
  }

  useEffect(() => {
    if (authorized) loadEvents();
  }, [authorized]);

  if (!authorized) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (code === ADMIN_CODE) {
            setAuthorized(true);
          } else {
            setMessage("Wrong admin code.");
          }
        }}
        className="bg-card p-6 rounded-lg border border-border w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Admin Access</h2>

        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter access code"
          className="w-full p-3 rounded bg-background border border-border"
        />

        {message && (
          <p className="mt-3 text-sm text-red-400">{message}</p>
        )}

        <button
          type="submit"
          className="mt-4 w-full bg-primary text-black font-bold p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

 async function saveEvent(event: EventRow) {
  setMessage("Saving...");

  try {
    const res = await fetch("/api/admin/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: ADMIN_CODE,
        event,
      }),
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


  return (
    <div className="min-h-screen bg-background text-white p-6">
      <h1 className="text-4xl font-bold mb-2">Admin Events</h1>
      <p className="text-muted-foreground mb-6">
        Manage event seats and status.
      </p>

      {message && (
        <div className="mb-4 rounded border border-border bg-card p-3 text-sm">
          {message}
        </div>
      )}

      <div className="grid gap-4">
        {events.map((event, index) => {
          const seatsLeft =
  Number(event.total_seats || 0) - Number(event.booked_seats || 0);

const revenue =
  Number(event.booked_seats || 0) * 195;

          return (
            <div key={event.id} className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-2xl font-bold mb-2">{event.title}</h2>

              <p className="text-sm text-muted-foreground mb-4">
                {seatsLeft} seats left · {event.booked_seats} booked · {event.total_seats} total · Revenue: ${revenue}
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <label className="text-sm">
                  Total Seats
                  <input
                    type="number"
                    value={event.total_seats}
                    onChange={(e) => {
                      const copy = [...events];
                      copy[index].total_seats = Number(e.target.value);
                      setEvents(copy);
                    }}
                    className="mt-1 w-full p-3 rounded bg-background border border-border"
                  />
                </label>

                <label className="text-sm">
                  Booked Seats
                  <input
                    type="number"
                    value={event.booked_seats}
                    onChange={(e) => {
                      const copy = [...events];
                      copy[index].booked_seats = Number(e.target.value);
                      setEvents(copy);
                    }}
                    className="mt-1 w-full p-3 rounded bg-background border border-border"
                  />
                </label>

                <label className="text-sm">
                  Status
                  <select
                    value={event.status || "active"}
                    onChange={(e) => {
                      const copy = [...events];
                      copy[index].status = e.target.value;
                      setEvents(copy);
                    }}
                    className="mt-1 w-full p-3 rounded bg-background border border-border"
                  >
                    <option value="active">active</option>
                    <option value="sold_out">sold_out</option>
                    <option value="completed">completed</option>
                    <option value="cancelled">cancelled</option>
                    <option value="draft">draft</option>
                    <option value="hidden">hidden</option>
                  </select>
                </label>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => saveEvent(event)}
                  className="px-5 py-3 bg-primary text-black font-bold rounded"
                >
                  Save
                </button>

                <button
  onClick={() => saveEvent({ ...event, status: "sold_out" })}
  className="px-5 py-3 border border-border rounded"
>
  Mark Sold Out
</button>

<button
  onClick={() => saveEvent({ ...event, status: "completed" })}
  className="px-5 py-3 border border-border rounded"
>
  Complete Event
</button>

<button
  onClick={() => saveEvent({ ...event, booked_seats: 0, status: "active" })}
  className="px-5 py-3 border border-border rounded"
>
  Reopen
</button>

              </div>
            </div>
          );  
        })}
      </div>
    </div>
  );
}