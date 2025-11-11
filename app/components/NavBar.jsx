"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { name: "LUXERUN™", href: "/run", icon: "/brand/LUXERUN.png" },
    { name: "LUXEGOAT™", href: "/goat", icon: "/brand/LUXEGOAT.png" },
    { name: "LUXEFLOW™", href: "/flow", icon: "/brand/LUXEFLOW.png" },
    { name: "LUXECYCLE™", href: "/cycle", icon: "/brand/LUXECYCLE.png" },
    { name: "BIO", href: "/bio", icon: "/brand/bio-icon.png" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black via-neutral-900/95 to-black/80 backdrop-blur-xl border-b border-neutral-800 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2.5">
        {/* 🌟 LOGO */}
        <div className="flex items-center gap-3">
          <Link href="/luxesculpt" className="flex items-center gap-2">
            <Image
              src="/brand/LUXESCULPT-ICON.PNG"
              alt="LuxeSculpt Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <div>
              <span className="font-bold text-[#F5C84C] tracking-wide">
                LUXESCULPT™
              </span>
              <p className="text-[0.65rem] text-[#F5C84C]/80 uppercase tracking-widest leading-none">
                Limited Production
              </p>
            </div>
          </Link>
        </div>

        {/* 🔗 NAV LINKS */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-2 text-sm font-semibold tracking-wider transition-all duration-300 ${
                  hovered === item.name ? "text-[#F5C84C]" : "text-white"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={item.name === "BIO" ? 42 : 32}
                  height={item.name === "BIO" ? 42 : 32}
                  className={`transition-all ${
                    hovered === item.name
                      ? "opacity-100 scale-110"
                      : "opacity-85 scale-100"
                  } ${item.name === "BIO" ? "rounded-full border border-[#F5C84C]/40" : ""}`}
                />
                {item.name}
              </Link>

              {/* Tooltip for Coming Soon */}
              {item.name !== "BIO" && (
                <div
                  className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm font-medium tracking-wide px-6 py-2 min-w-[150px] text-center rounded-lg border border-[#F5C84C]/30 transition-all duration-300 ${
                    hovered === item.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🛒 DUAL-TONE PREORDER BUTTON */}
        <div className="flex items-center gap-4">
          <div className="relative group rounded-full overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
            <div className="flex">
              {/* GOLD HALF */}
              <button
                onClick={() => {
                  window.location.href = `/api/checkout?priceId=${process.env.NEXT_PUBLIC_STRIPE_PRICE_GOLD}`;
                }}
                className="px-5 py-2.5 text-black font-semibold gold-metallic rounded-l-full relative z-10"
              >
                Gold
              </button>

              {/* COPPER HALF */}
              <button
                onClick={() => {
                  window.location.href = `/api/checkout?priceId=${process.env.NEXT_PUBLIC_STRIPE_PRICE_COPPER}`;
                }}
                className="px-5 py-2.5 text-black font-semibold copper-metallic rounded-r-full relative z-10"
              >
                Copper
              </button>
            </div>

            {/* Overlay Label */}
            <span className="absolute inset-0 flex items-center justify-center text-sm md:text-base font-extrabold tracking-widest text-black/80 opacity-0 group-hover:opacity-100 transition-all duration-700">
              PRE-ORDER NOW
            </span>
          </div>

          <ShoppingBag className="w-5 h-5 text-white hover:text-[#F5C84C] transition-all cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
