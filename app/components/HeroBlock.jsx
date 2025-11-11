"use client";
import { useEffect, useRef } from "react";

export default function HeroBlock({ videoSrc, fallbackImg, title, subtitle, ctaText, ctaLink }) {
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
    <section className="relative w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc || "/assets/hero.mp4"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={fallbackImg || "/assets/hero-poster.png"}
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg">
          {title || "LUXESCULPT™"}
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl text-neutral-300 mt-4 max-w-3xl leading-snug">
          {subtitle || "Bioadaptive Athletic Architecture for Maximum Force, Minimal Fatigue."}
        </p>
        {ctaText && (
          <a
            href={ctaLink || "#"}
            className="mt-8 inline-block border border-white/30 text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}



