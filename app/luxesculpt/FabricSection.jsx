"use client";
import Image from "next/image";

export default function FabricSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* 🧵 Image - slightly smaller, left side */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-[70%] md:w-[60%]">
          <Image
            src="/images/luxesculpt/engineered-fabric.png"
            alt="LuxeSculpt engineered compression fabric"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* ✨ Text - right side */}
      <div className="w-full md:w-1/2 text-center md:text-left max-w-md">
        <h2 className="text-[#F5C84C] font-semibold text-2xl mb-3">
          Advanced Compression Fabric
        </h2>
        <p className="text-gray-300 leading-relaxed">
          230 GSM adaptive weave with micro-sheen finish and anti-pilling
          resilience. Designed for elite recovery and movement stability.
        </p>
      </div>
    </section>
  );
}
