import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function BookingSuccess() {
  const [status, setStatus] = useState("Confirming your booking...");

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get("session_id");

    if (!sessionId) {
      setStatus("Missing payment session.");
      return;
    }

    fetch("/api/stripe/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("Your seats are reserved. A confirmation email has been sent.");
        } else {
          setStatus(data.error || "Payment confirmed, but booking update failed.");
        }
      })
      .catch(() => {
        setStatus("Payment confirmed, but booking update failed.");
      });
  }, []);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <CheckCircle size={86} className="text-primary" />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl uppercase leading-none">
          <span className="text-white">Booking </span>
          <span className="text-primary">Confirmed</span>
        </h1>

        <p className="mt-8 text-lg text-muted-foreground">{status}</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/events"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded hover:brightness-110 transition"
          >
            Back to Events
          </a>

          <a
            href="/"
            className="inline-flex items-center justify-center px-10 py-4 border border-border text-white font-semibold rounded hover:border-primary transition"
          >
            Back Home
          </a>
        </div>
      </div>
    </main>
  );
}