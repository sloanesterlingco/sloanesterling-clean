"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// 🎯 Change your launch date here:
const launchDate = new Date("2026-06-21T00:00:00");

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 overflow-hidden">

      {/* 🔥 Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-90" />

      {/* ⚡ Precision Performance Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F5C84C20] via-[#F5C84C] to-[#F5C84C20]" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F5C84C20] via-[#F5C84C] to-[#F5C84C20]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* 🏆 Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Elite Performance Begins Summer 2026
        </h2>

        {/* ⏳ Countdown Timer */}
        <div className="mt-10 flex justify-center gap-8 text-center">
          <div>
            <p className="text-5xl font-semibold text-[#F5C84C]">
              {timeLeft.days}
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-neutral-500">
              Days
            </p>
          </div>

          <div>
            <p className="text-5xl font-semibold text-[#F5C84C]">
              {timeLeft.hours}
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-neutral-500">
              Hours
            </p>
          </div>

          <div>
            <p className="text-5xl font-semibold text-[#F5C84C]">
              {timeLeft.minutes}
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-neutral-500">
              Minutes
            </p>
          </div>
        </div>

        {/* 📝 Founder’s Note */}
        <div className="mt-14 max-w-2xl mx-auto text-neutral-300 leading-relaxed">
          <p className="text-lg italic">
            “We’ve spent years building a system that pushes human biomechanics  
            into its next evolution. ARC 01 isn’t just elite—it’s a new category  
            of performance gear. Thank you for being part of this movement  
            before the world catches on.”
          </p>

          <p className="mt-4 text-sm uppercase tracking-widest text-neutral-500">
            — Sloane, Founder of LuxeSculpt™
          </p>
        </div>

        {/* ✨ CTA Button */}
        <div className="mt-12">
          <Link
            href="/waitlist"
            className="
              inline-block px-12 py-4 rounded-full text-lg font-semibold
              bg-[#F5C84C] text-black shadow-lg
              transition-all duration-300
              hover:bg-[#e6b93f] hover:shadow-[#F5C84C66] hover:shadow-xl
              animate-pulse-slow
            "
          >
            Join the Waitlist
          </Link>
        </div>

      </div>

      {/* 🔄 Slow pulse animation */}
      <style>{`
        @keyframes pulseSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s infinite ease-in-out;
        }
      `}</style>

    </section>
  );
}
