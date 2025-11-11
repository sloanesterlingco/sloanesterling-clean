export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10 border-t border-[#222]">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {/* Signature Line */}
        <h3 className="text-lg md:text-xl font-semibold tracking-widest text-[#FFD700]">
          SLOANE STERLING
        </h3>

        {/* Tagline */}
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-400">
          Athlete • Entrepreneur • Designer
        </p>

        {/* Divider Line */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-[#FFD700] via-[#B87333] to-[#FFD700] mx-auto my-4" />

        {/* Credits */}
        <p className="text-xs text-gray-500 tracking-widest">
          © {new Date().getFullYear()} LuxeSculpt™ — Engineered for Movement
        </p>

        {/* Optional website link */}
        <p className="text-xs text-gray-600 mt-2">
          <a
            href="https://luxesculptperformance.com"
            className="text-[#FFD700] hover:text-white transition"
          >
            luxesculptperformance.com
          </a>
        </p>
      </div>
    </footer>
  );
}


