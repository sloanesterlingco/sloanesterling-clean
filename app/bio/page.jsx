"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BioPage() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 py-16 bg-black text-white min-h-screen overflow-hidden">
      {/* 🖼️ Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/brand/sloane-bio.jpg"
          alt="Sloane Sterling Portrait"
          width={225}
          height={225}
          className="rounded-full object-cover mb-8 shadow-[0_0_45px_rgba(245,200,76,0.5)] border-[3px] border-[#F5C84C]/80 
          w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]"
          priority
        />
      </motion.div>

      {/* 🌟 Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-[#F5C84C] drop-shadow-[0_0_25px_rgba(245,200,76,0.5)] mb-4"
      >
        Sloane Sterling
      </motion.h1>

      {/* 🧬 Bio Section (Hydration Safe) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="max-w-3xl text-center text-gray-300 leading-relaxed mb-8"
      >
        <span className="block text-lg text-gray-200 font-medium mb-6">
          Creator • Athlete • Influencer
        </span>
        <span className="block text-[clamp(0.95rem,2.8vw,1.25rem)] text-gray-300 leading-relaxed">
          Sloane Sterling blends elite fitness, digital entrepreneurship, and creative innovation.
          With hands-on experience in e-commerce, drop shipping, and storefront development, she’s
          building the LuxeSculpt™ performance brand from the ground up — merging technology,
          fashion, and functional design into a new era of precision activewear. Her mission: to
          empower creators and athletes to move, build, and live with purpose.
        </span>
      </motion.div>

      {/* 📸 Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="https://www.instagram.com/sloanesterlingc/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 text-sm md:text-base font-semibold uppercase tracking-widest bg-[#F5C84C] text-black rounded-full 
          shadow-[0_0_20px_rgba(245,200,76,0.5)] hover:shadow-[0_0_35px_rgba(245,200,76,0.7)] hover:scale-105 active:scale-95 
          transition-all duration-300 ease-out touch-manipulation"
        >
          Follow on Instagram
        </a>

        <a
          href="https://www.luxesculptperformance.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 text-sm md:text-base font-semibold uppercase tracking-widest border-2 border-[#F5C84C] text-[#F5C84C] rounded-full 
          hover:bg-[#F5C84C] hover:text-black hover:shadow-[0_0_35px_rgba(245,200,76,0.7)] hover:scale-105 active:scale-95 
          transition-all duration-300 ease-out touch-manipulation"
        >
          Visit Official Site
        </a>
      </motion.div>
    </main>
  );
}

