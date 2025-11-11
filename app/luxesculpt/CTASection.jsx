"use client";
import React from "react";

export default function CTASection() {
  const handleCheckout = async (priceId) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // ✅ redirect to Stripe
      } else {
        alert("Checkout error: " + (data.error || "Unknown issue"));
        console.error("Checkout error:", data);
      }
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Checkout failed — check console for details.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold text-white mb-4">Preorder LuxeSculpt™ Proto-01</h2>
      <div className="flex gap-6">
        <button
          onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_PRICE_GOLD)}
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-black px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Gold Edition $189
        </button>
        <button
          onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_PRICE_COPPER)}
          className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Brushed Copper $189
        </button>
      </div>
    </div>
  );
}
