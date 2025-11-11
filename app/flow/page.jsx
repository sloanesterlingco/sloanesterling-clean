"use client";

import HeroBlock from "../components/HeroBlock";
import ProductGrid from "../components/ProductGrid";
import MotionDivider from "../components/MotionDivider";
import Image from "next/image";

export default function LuxeFlowPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white">
      {/* HERO SECTION */}
      <HeroBlock
        title="LUXEFLOW™"
        subtitle="Studio-Engineered Elegance for Motion and Mind"
        videoSrc="/assets/hero.mp4" // can replace later with serene studio loop
        fallbackImg="/assets/look-top.jpg"
        ctaText="Shop LuxeFlow Collection →"
        ctaLink="#products"
      />

      {/* MOTION DIVIDER */}
      <MotionDivider />

      {/* PRODUCT GRID */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">
          Sculpted for Balance. Designed for Grace.
        </h2>

        <ProductGrid
          products={[
            {
              id: 1,
              name: "LuxeFlow Sculpt Seamless Legging",
              image: "/assets/look-leggings.jpg",
              tag: "Seamless Flex",
            },
            {
              id: 2,
              name: "LuxeFlow Serenity Bra",
              image: "/assets/look-top.jpg",
              tag: "Adaptive Comfort",
            },
            {
              id: 3,
              name: "LuxeFlow Studio Jacket",
              image: "/assets/fall-edit.jpg",
              tag: "Soft-Shell Warmth",
            },
            {
              id: 4,
              name: "LuxeFlow Restore Short",
              image: "/assets/look-shoes.jpg",
              tag: "Minimal Compression",
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
