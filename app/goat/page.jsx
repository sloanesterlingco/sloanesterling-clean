"use client";

import HeroBlock from "../components/HeroBlock";
import ProductGrid from "../components/ProductGrid";
import MotionDivider from "../components/MotionDivider";
import Image from "next/image";

export default function LuxeGoatPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white">
      {/* HERO SECTION */}
      <HeroBlock
        title="LUXEGOAT™"
        subtitle="Trail-Engineered Performance Gear"
        videoSrc="/assets/hero.mp4" // you can swap for a trail clip later
        fallbackImg="/assets/fall-edit.jpg"
        ctaText="Shop LuxeGoat Trail Gear →"
        ctaLink="#products"
      />

      {/* MOTION DIVIDER */}
      <MotionDivider />

      {/* PRODUCT GRID */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">
          Designed for Elevation. Built for Endurance.
        </h2>

        <ProductGrid
          products={[
            {
              id: 1,
              name: "LuxeGoat Trail Compression Tight",
              image: "/assets/look-leggings.jpg",
              tag: "Stability Mapping",
            },
            {
              id: 2,
              name: "LuxeGoat Altitude Bra",
              image: "/assets/look-top.jpg",
              tag: "Breathable Reinforcement",
            },
            {
              id: 3,
              name: "LuxeGoat Terrain Jacket",
              image: "/assets/dupes-edit.jpg",
              tag: "Weather-Adaptive Shell",
            },
            {
              id: 4,
              name: "LuxeGoat All-Terrain Shorts",
              image: "/assets/look-shoes.jpg",
              tag: "Trail Mobility",
            },
          ]}
        />
      </section>

      {/* MOTION DIVIDER */}
      <MotionDivider />

      {/* FOOTER */}
      <footer className="w-full text-center py-10 text-sm opacity-70">
        © {new Date().getFullYear()} LUXESCULPT™ — Designed by Sloane Sterling
      </footer>
    </main>
  );
}
