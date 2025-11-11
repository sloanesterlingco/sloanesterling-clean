"use client";

import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from "react";
import CTASection from "./CTASection";

const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
const FabricSection = dynamic(() => import("./FabricSection"), { ssr: false });
const MuscleMapping = dynamic(() => import("./MuscleMapping"), { ssr: false });
const RearView = dynamic(() => import("./RearView"), { ssr: false });

export default function LuxeSculptPage() {
  const ctaRef = useRef(null);
  const heroRef = useRef(null);
  const chimeRef = useRef(null);
  const [activeGlow, setActiveGlow] = useState(null);

  // ✅ Smooth scroll + chime ONLY when the NAVBAR button is clicked
  useEffect(() => {
    const navScrollBtn = document.querySelector('#nav-preorder');
    if (!navScrollBtn) return;

    const handleScrollToCTA = (e) => {
      e.preventDefault(); // never navigate
      if (ctaRef.current) {
        ctaRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        if (chimeRef.current) {
          try {
            chimeRef.current.currentTime = 0;
            chimeRef.current.play();
          } catch {}
        }
      }
    };

    navScrollBtn.addEventListener("click", handleScrollToCTA);
    return () => navScrollBtn.removeEventListener("click", handleScrollToCTA);
  }, []);

  // ✨ Visual-only glow (NO audio here)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveGlow(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden fade-in relative">
      {/* HERO */}
      <section
        id="hero"
        ref={heroRef}
        className={`hero-metallic w-full relative transition-all duration-1000 ${
          activeGlow === "hero" ? "animate-luxeGlowGold" : ""
        }`}
      >
        <HeroSection
          videoSrc="/videos/luxesculpt-hero.mp4"
          title="LuxeSculpt™ Proto-01"
          subtitle="Engineered compression. Sculpted performance. Limited Gold & Brushed Copper Editions."
        />
      </section>

      {/* FABRIC */}
      <section id="fabric" className="w-full border-t border-gray-800">
        <FabricSection />
      </section>

      {/* MAPPING */}
      <section id="muscle-mapping" className="w-full border-t border-gray-800">
        <MuscleMapping />
      </section>

      {/* REAR */}
      <section id="rear-view" className="w-full border-t border-gray-800">
        <RearView />
      </section>

      {/* CTA */}
      <section
        id="cta"
        ref={ctaRef}
        className={`cta-metallic w-full border-t border-gray-800 py-16 text-center relative transition-all duration-1000 ${
          activeGlow === "cta" ? "animate-luxeGlowCopper" : ""
        }`}
      >
        <CTASection />
      </section>

      {/* 🔔 Luxe Ping (used only by navbar click handler above) */}
      <audio
        ref={chimeRef}
        src="/sounds/luxe-ping.mp3"
        preload="auto"
        className="hidden"
      />
    </main>
  );
}



