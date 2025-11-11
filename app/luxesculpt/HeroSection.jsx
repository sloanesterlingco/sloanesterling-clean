"use client";

import BuyButton from "@/components/BuyButton";

export default function HeroSection({ videoSrc, title, subtitle }) {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc || "/videos/luxesculpt-hero.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🖤 Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 💎 Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-300 font-light">
          {subtitle}
        </p>

        {/* 🛍️ Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          {/* GOLD */}
          <BuyButton
            priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_GOLD}
            label="LuxeSculpt Gold Edition"
            className="bg-[#F5C84C] hover:bg-[#e6b93f] text-black font-semibold shadow-md transition-all duration-300 rounded-full px-8 py-3"
          />
          {/* COPPER */}
          <BuyButton
            priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_COPPER}
            label="LuxeSculpt Brushed Copper"
            className="bg-gradient-to-br from-[#b36b40] to-[#8a4f28] hover:from-[#a25e37] hover:to-[#7c4124] text-black font-semibold shadow-md transition-all duration-300 rounded-full px-8 py-3"
          />
        </div>

        <p className="mt-6 text-xs text-neutral-500 uppercase tracking-widest">
          Limited to 300 builds worldwide
        </p>
      </div>
    </section>
  );
}
