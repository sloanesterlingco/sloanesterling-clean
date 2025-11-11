"use client";
import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setTimeout(() => vid.play().catch(() => {}), 300);
        });
      }
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/assets/hero.mp4"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 🌤️ Light Luxe Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />

      {/* 🩶 Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-[#F5C84C] drop-shadow-[0_0_25px_rgba(245,200,76,0.6)]">
          LuxeSculpt™
        </h1>
        <p className="text-xl md:text-3xl text-neutral-300 mt-4 max-w-3xl">
          Bioadaptive Athletic Architecture for Maximum Force, Minimal Fatigue.
        </p>
        <p className="text-neutral-400 text-sm md:text-base mt-3">
          by <span className="text-white font-semibold">Sloane Sterling™</span>
        </p>
      </div>
    </div>
  );
}
