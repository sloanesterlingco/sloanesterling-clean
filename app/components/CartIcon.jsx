"use client";

import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  let totalItems = 0;

  try {
    const { cart } = useCart() || {};
    totalItems = cart?.reduce((acc, item) => acc + (item.quantity || 1), 0) || 0;
  } catch {
    totalItems = 0;
  }

  return (
    <div className="relative cursor-pointer group">
      {/* 🛒 Cart Icon */}
      <span className="text-[#F5C84C] text-xl transition-transform duration-200 group-hover:scale-110">
        🛒
      </span>

      {/* 🔢 Item Counter Badge */}
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#F5C84C] text-black text-[10px] font-bold rounded-full px-[5px] py-[1px] shadow-md">
          {totalItems}
        </span>
      )}

      {/* ✨ Glow Ring on Hover */}
      <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 bg-[#F5C84C]/30"></span>
    </div>
  );
}
