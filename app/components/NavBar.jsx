"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Tooltip Component
function ComingSoonTooltip() {
  return (
    <div
      className="
        absolute left-1/2 top-full mt-2 -translate-x-1/2
        px-3 py-1 rounded-md
        bg-black/90 text-[#F5C84C] text-xs font-semibold 
        border border-[#F5C84C40]
        backdrop-blur-sm
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        whitespace-nowrap pointer-events-none
        z-50
      "
    >
      COMING SUMMER 2026
    </div>
  );
}

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-xl border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-widest text-white">
          LuxeSculpt™
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">

          <li>
            <Link href="/luxesculpt" className="hover:text-[#F5C84C] transition">
              LuxeSculpt
            </Link>
          </li>

          {/* Coming Soon Items */}
          <li className="relative group">
            <span className="cursor-not-allowed opacity-60 hover:opacity-100 transition">
              Flow
            </span>
            <ComingSoonTooltip />
          </li>

          <li className="relative group">
            <span className="cursor-not-allowed opacity-60 hover:opacity-100 transition">
              Goat
            </span>
            <ComingSoonTooltip />
          </li>

          <li className="relative group">
            <span className="cursor-not-allowed opacity-60 hover:opacity-100 transition">
              Run
            </span>
            <ComingSoonTooltip />
          </li>

          <li className="relative group">
            <span className="cursor-not-allowed opacity-60 hover:opacity-100 transition">
              Cycle
            </span>
            <ComingSoonTooltip />
          </li>

          <li className="relative group">
            <span className="cursor-not-allowed opacity-60 hover:opacity-100 transition">
              Swag
            </span>
            <ComingSoonTooltip />
          </li>
        </ul>

        {/* Desktop Right-Side Buttons (Option A - Active Waitlist Buttons) */}
        <ul className="hidden md:flex items-center gap-6">

          {/* GOLD EDITION */}
          <li>
            <Link
              href="/waitlist"
              className="bg-[#F5C84C] hover:bg-[#e6b93f] text-black font-semibold px-6 py-2 rounded-full shadow transition"
            >
              Gold Edition
            </Link>
          </li>

          {/* BRUSHED COPPER EDITION */}
          <li>
            <Link
              href="/waitlist"
              className="bg-gradient-to-br from-[#b36b40] to-[#8a4f28] hover:from-[#a25e37] hover:to-[#7c4124] text-black font-semibold px-6 py-2 rounded-full shadow transition"
            >
              Brushed Copper
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 border-t border-neutral-800 px-6 py-4 space-y-4 text-white">

          <Link
            href="/luxesculpt"
            className="block text-lg font-medium hover:text-[#F5C84C] transition"
            onClick={() => setMobileOpen(false)}
          >
            LuxeSculpt
          </Link>

          {/* Coming Soon Mobile Links */}
          <p className="text-lg font-medium text-neutral-500">Flow — Coming Summer 2026</p>
          <p className="text-lg font-medium text-neutral-500">Goat — Coming Summer 2026</p>
          <p className="text-lg font-medium text-neutral-500">Run — Coming Summer 2026</p>
          <p className="text-lg font-medium text-neutral-500">Cycle — Coming Summer 2026</p>
          <p className="text-lg font-medium text-neutral-500">Swag — Coming Summer 2026</p>

          {/* Mobile Gold & Copper Buttons */}
          <Link
            href="/waitlist"
            onClick={() => setMobileOpen(false)}
            className="block bg-[#F5C84C] text-black font-semibold px-6 py-3 rounded-full shadow text-center"
          >
            Gold Edition
          </Link>

          <Link
            href="/waitlist"
            onClick={() => setMobileOpen(false)}
            className="block bg-gradient-to-br from-[#b36b40] to-[#8a4f28] text-black font-semibold px-6 py-3 rounded-full shadow text-center"
          >
            Brushed Copper
          </Link>
        </div>
      )}
    </nav>
  );
}
