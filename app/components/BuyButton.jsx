"use client";

import { useState } from "react";

export default function BuyButton({ priceId, quantity = 1, children = "Buy Now" }) {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, quantity }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      if (!data.url) throw new Error("No checkout URL returned");
      window.location.href = data.url;
    } catch (e) {
      console.error("Checkout error:", e);
      alert("Checkout error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={startCheckout}
      disabled={loading || !priceId}
      className="w-full rounded-xl bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 px-4 py-3 text-black font-semibold shadow hover:opacity-90 disabled:opacity-50"
      aria-busy={loading}
    >
      {loading ? "Redirecting…" : children}
    </button>
  );
}
