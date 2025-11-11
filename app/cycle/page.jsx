"use client";

import HeroBlock from "../components/HeroBlock";
import ProductGrid from "../components/ProductGrid";
import MotionDivider from "../components/MotionDivider";
import Image from "next/image";

export default function LuxeCyclePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white">
      {/* HERO SECTION */}
      <HeroBlock
        title="LUXECYCLE™"
        subtitle="Aerodynamic Performance — Precision in Motion"
        videoSrc="/assets/hero.mp4" // can replace later with your cycling loop
        fallbackImg="/assets/look-leggings.jpg"
        ctaText="Shop LuxeCycle Gear →"
        ctaLink="#products"
      />

      {/* MOTION DIVIDER */}
      <MotionDivider />

      {/* PRODUCT GRID */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">
          Built for Speed. Designed for Control.
        </h2>

        <ProductGrid
          products={[
            {
              id: 1,
              name: "LuxeCycle Velocity Bib Legging",
              image: "/assets/look-leggings.jpg",
              tag: "Compression Aerofit",
            },
            {
              id: 2,
              name: "LuxeCycle Apex Bra",
              image: "/assets/look-top.jpg",
              tag: "Zero-Drag Design",
            },
            {
              id: 3,
              name: "LuxeCycle Pro Shell Jacket",
              image: "/assets/dupes-edit.jpg",
              tag: "Wind-Resistant Layer",
            },
            {
              id: 4,
              name: "LuxeCycle Sprint Short",
              image: "/assets/look-shoes.jpg",
              tag: "Dynamic Stretch",
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
