"use client";
import Image from "next/image";

export default function LuxeRunPage() {
  return (
    <main className="bg-black text-white text-center">
      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col justify-center items-center py-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-6">
          LUXERUN™
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Engineered for velocity — LuxeRun™ delivers biomechanical compression
          precision and performance mapping for every stride.
        </p>
      </section>

      {/* FABRIC + MUSCLE MAPPING SECTION */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em]">
          Adaptive Compression Mapping
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
          LuxeRun™ integrates biomechanically targeted compression to support
          quads, hamstrings, and calves with a gradient tension profile.
          Engineered to stabilize kinetic chains while maintaining breathability
          and recovery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Image
            src="/images/muscle_map_run.jpg"
            alt="LuxeRun™ Muscle Support Architecture"
            width={800}
            height={800}
            className="rounded-2xl opacity-90 hover:opacity-100 transition"
          />
          <Image
            src="/images/fabric_detail_run.jpg"
            alt="Precision-knit LuxeRun™ fabric detail"
            width={800}
            height={800}
            className="rounded-2xl opacity-90 hover:opacity-100 transition"
          />
          <Image
            src="/images/runner_action.jpg"
            alt="Athlete running in LuxeRun™ compression leggings"
            width={800}
            height={800}
            className="rounded-2xl opacity-90 hover:opacity-100 transition"
          />
        </div>
      </section>
    </main>
  );
}