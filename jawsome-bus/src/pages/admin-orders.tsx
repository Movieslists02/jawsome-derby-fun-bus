import { useEffect, useState } from "react";
import { ADMIN_CODE } from "@/lib/admin-auth";
import { supabase } from "@/lib/supabase";

type OrderRow = {
  id: string;
  stripe_session_id: string;
  customer_email: string;
  total_amount: number;
  status: string;
  shipping_status?: string;
  tracking_number?: string | null;
  tracking_url?: string | null;
  carrier?: string | null;
  printful_order_id?: string | null;
  created_at?: string;
  order_number?: string;
  order_items?: {
    name: string;
    quantity: number;
    price: number;
    item_type?: string;
  }[];
};

export default function AdminOrdersPage() {
  const [code, setCode] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [message, setMessage] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<OrderRow | null>(null);

  async function loadOrders() {
  const res = await fetch(`/api/admin/orders?code=${ADMIN_CODE}`);
  const data = await res.json();

  if (!res.ok) {
    setMessage(data.error || "Failed to load orders");
    return;
  }

  setOrders(data.orders || []);
}

  useEffect(() => {
    if (authorized) loadOrders();
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

        {message && <p className="mt-3 text-sm text-red-400">{message}</p>}

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

  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total_amount || 0),
    0
  );

  return (
    <div className="min-h-screen bg-background text-white p-6">
      <h1 className="text-4xl font-bold mb-2">Admin Orders</h1>
      <p className="text-muted-foreground mb-6">
        View paid merch and checkout orders.
      </p>

      {message && (
        <div className="mb-4 rounded border border-border bg-card p-3 text-sm">
          {message}
        </div>
      )}

      <div className="mb-6 bg-card border border-border rounded-lg p-5">
        <p className="text-sm text-muted-foreground">Total Revenue</p>
        <h2 className="text-3xl font-bold text-primary">${totalRevenue}</h2>
      </div>

      <div className="overflow-x-auto bg-card border border-border rounded-lg">
        <table className="w-full text-sm">
          <thead className="border-b border-border text-muted-foreground">
            <tr>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Order #</th>
              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Stripe Session</th>
              <th className="text-left p-4">Status</th>
              <th className="text-right p-4">Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
  key={order.id}
  onClick={() => setSelectedOrder(order)}
  className="border-b border-border cursor-pointer hover:bg-card/50"
>
                <td className="p-4">
  {order.created_at
    ? new Date(order.created_at).toLocaleString()
    : "—"}
</td>

<td className="p-4 font-bold text-primary">
  {order.order_number || "—"}
</td>


<td className="p-4">
  <div>{order.customer_email || "—"}</div>

  <div className="mt-2 text-xs text-muted-foreground">
    {order.order_items?.map((item, index) => (
      <div key={index}>
        {item.quantity} × {item.name} — ${item.price}
      </div>
    ))}
  </div>
</td>
                <td className="p-4 text-xs text-muted-foreground">
                  {order.stripe_session_id}
                </td>
                <td className="p-4">{order.status}</td>
                <td className="p-4 text-right font-bold text-primary">
                  ${order.total_amount}
                </td>
              </tr>
            ))}
            

            {orders.length === 0 && (
              <tr>
                <td className="p-6 text-center text-muted-foreground" colSpan={6}>
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
      </div>
      {selectedOrder && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-card border border-border rounded-lg p-6 w-full max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Order {selectedOrder.order_number}
        </h2>

        <button
          onClick={() => setSelectedOrder(null)}
          className="text-red-400"
        >
          Close
        </button>
      </div>

      <p>
        <strong>Customer:</strong>{" "}
        {selectedOrder.customer_email}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {selectedOrder.status}
      </p>

      <p>
        <strong>Total:</strong> $
        {selectedOrder.total_amount}
      </p>
      <hr className="my-4 border-border" />

<h3 className="font-bold mb-2">Shipping / Printful</h3>

<p>
  <strong>Shipping:</strong>{" "}
  {selectedOrder.shipping_status || "Pending"}
</p>

<p>
  <strong>Printful Order ID:</strong>{" "}
  {selectedOrder.printful_order_id || "—"}
</p>

<p>
  <strong>Carrier:</strong>{" "}
  {selectedOrder.carrier || "—"}
</p>

<p>
  <strong>Tracking:</strong>{" "}
  {selectedOrder.tracking_url ? (
    <a
      href={selectedOrder.tracking_url}
      target="_blank"
      rel="noreferrer"
      className="text-primary underline"
    >
      Track Package
    </a>
  ) : (
    selectedOrder.tracking_number || "—"
  )}
</p>

      <hr className="my-4 border-border" />

      <h3 className="font-bold mb-2">
        Purchased Items
      </h3>

      {selectedOrder.order_items?.map((item, index) => (
        <div
          key={index}
          className="mb-2 border-b border-border pb-2"
        >
          <div>{item.name}</div>
          <div className="text-sm text-muted-foreground">
            Qty: {item.quantity}
          </div>
          <div className="text-sm text-muted-foreground">
            Price: ${item.price}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    </div>
    
  );
}