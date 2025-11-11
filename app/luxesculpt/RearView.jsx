"use client";
import Image from "next/image";

export default function RearView() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-t border-gray-800 flex flex-col items-center text-center">
      {/* 🧍‍♀️ Text - above image */}
      <div className="max-w-xl mb-8">
        <h2 className="text-[#F5C84C] font-semibold text-2xl mb-3">
          Sculpted Rear Support
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Engineered to enhance the glutes and posterior chain with adaptive
          tension zones — lifting, stabilizing, and empowering movement.
        </p>
      </div>

      {/* 📸 Image - centered */}
      <div className="w-[85%] md:w-[60%] lg:w-[45%]">
        <Image
          src="/images/luxesculpt/rearimage.png"
          alt="LuxeSculpt rear support design"
          width={1000}
          height={800}
          className="rounded-2xl shadow-lg object-cover mx-auto"
        />
      </div>
    </section>
  );
}
