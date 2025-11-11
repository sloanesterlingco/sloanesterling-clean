"use client";
import Image from "next/image";

export default function MuscleMapping() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 border-t border-gray-800 flex flex-col md:flex-row-reverse items-center justify-center gap-10">
      {/* 🦵 Image - smaller, right side */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="w-[80%] md:w-[70%]">
          <Image
            src="/images/luxesculpt/muscle-mapping.png"
            alt="Raised Muscle Architecture compression zones"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* 💬 Text - left side */}
      <div className="w-full md:w-1/2 text-center md:text-left max-w-md">
        <h2 className="text-[#F5C84C] font-semibold text-2xl mb-3">
          Raised Muscle Architecture™
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Zoned compression patterns align with muscle fiber pathways for
          improved proprioception, reduced fatigue, and increased blood flow.
        </p>
      </div>
    </section>
  );
}
