import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/cart-context';


export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
  clearCart();

  const sessionId = new URLSearchParams(window.location.search).get("session_id");

  if (!sessionId) return;

  fetch("/api/stripe/webhook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ session_id: sessionId }),
  }).catch((error) => {
    console.error("Merch webhook call failed:", error);
  });
}, [clearCart]);

  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="flex justify-center mb-6">
          <CheckCircle size={86} className="text-primary" />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl uppercase text-foreground">
          Order <span className="text-primary">Confirmed</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Thank you for supporting Jawsome Racing. Your order has been received
          and is being processed.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/merch"
            className="px-8 py-4 bg-primary text-black font-bold uppercase rounded hover:brightness-110 transition-all"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="px-8 py-4 border border-border text-foreground rounded hover:border-primary hover:text-primary transition-all"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}