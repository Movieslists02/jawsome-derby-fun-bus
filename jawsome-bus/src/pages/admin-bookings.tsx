import { useState } from "react";
import { ADMIN_CODE } from "@/lib/admin-auth";

export default function AdminOrdersPage() {
  const [code, setCode] = useState("");
  const [authorized, setAuthorized] = useState(false);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-card p-6 rounded-lg border border-border w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            Admin Access
          </h2>

          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter access code"
            className="w-full p-3 rounded bg-background border border-border"
          />

          <button
            onClick={() => {
              if (code === ADMIN_CODE) {
                setAuthorized(true);
              }
            }}
            className="mt-4 w-full bg-primary text-black font-bold p-3 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <h1 className="text-4xl font-bold">
        Admin Bookings
      </h1>
    </div>
  );
}