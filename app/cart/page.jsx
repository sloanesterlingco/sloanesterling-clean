"use client";

import Link from "next/link";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#F5C84C] drop-shadow-[0_0_10px_rgba(245,200,76,0.8)]">
        LuxeSculpt™ Cart
      </h1>

      <p className="text-gray-300 max-w-lg mb-10">
        Your shopping cart is currently empty. Add items from the LuxeSculpt page and proceed to checkout when ready.
      </p>

      <Link
        href="/luxesculpt"
        className="bg-[#F5C84C] text-black font-semibold px-6 py-3 rounded-full hover:scale-[1.05] transition-all shadow-[0_0_10px_rgba(245,200,76,0.5)]"
      >
        Return to LuxeSculpt
      </Link>
    </main>
  );
}
