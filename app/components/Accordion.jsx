"use client";

import { useState } from "react";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border border-[#F5C84C]/20 bg-black/60 backdrop-blur-md
                        shadow-[0_0_25px_rgba(245,200,76,0.15)]
                        transition-all duration-300`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left"
            >
              <span className="font-semibold text-[clamp(1rem,2.6vw,1.25rem)] text-white">
                {item.title}
              </span>
              <span
                className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full
                            border border-[#F5C84C]/30 text-[#F5C84C]
                            transition-transform duration-300
                            ${open ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out
                         ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 md:px-6 pb-6 text-gray-300 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
