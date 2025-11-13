"use client";

export default function HeroSection({ videoSrc }) {
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
        {/* 🔥 New Hero Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          Coming Summer 2026
        </h1>

        {/* 🔥 New Subheadline */}
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-300 font-light">
          The most revolutionary running muscle-mapping compression system ever engineered for the general population.
        </p>

        {/* 📝 Waitlist Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/waitlist"
            className="bg-[#F5C84C] hover:bg-[#e6b93f] text-black font-semibold shadow-md transition-all duration-300 rounded-full px-8 py-3"
          >
            Join the Waitlist
          </a>
        </div>

        {/* ❗ Remove the “300 builds worldwide” line or replace it */}
        <p className="mt-6 text-xs text-neutral-500 uppercase tracking-widest">
          Limited early access reservations open soon
        </p>
      </div>
    </section>
  );
}
