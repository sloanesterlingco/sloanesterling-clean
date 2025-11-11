"use client";

import HeroBlock from "../components/HeroBlock";
import ProductGrid from "../components/ProductGrid";
import MotionDivider from "../components/MotionDivider";
import Image from "next/image";

export default function LuxeSwagPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white">
      {/* HERO SECTION */}
      <HeroBlock
        title="LUXESWAG™"
        subtitle="Performance Accessories & Lifestyle Essentials"
        videoSrc="/assets/hero.mp4" // can replace later with a branded motion loop
        fallbackImg="/assets/fall-edit.jpg"
        ctaText="Shop LuxeSwag™ Accessories →"
        ctaLink="#products"
      />

      {/* MOTION DIVIDER */}
      <MotionDivider />

      {/* PRODUCT GRID */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">
          Engineered Details. Everyday Luxury.
        </h2>

        <ProductGrid
          products={[
            {
              id: 1,
              name: "LuxeSwag Velocity Cap",
              image: "/assets/look-shoes.jpg",
              tag: "Lightweight Breathability",
            },
            {
              id: 2,
              name: "LuxeSwag Thermal Bottle",
              image: "/assets/look-bottle.jpg",
              tag: "Temperature Control",
            },
            {
              id: 3,
              name: "LuxeSwag Motion Tee",
              image: "/assets/look-top.jpg",
              tag: "Everyday Comfort",
            },
            {
              id: 4,
              name: "LuxeSwag Gym Duffel",
              image: "/assets/dupes-edit.jpg",
              tag: "Athletic Utility",
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
