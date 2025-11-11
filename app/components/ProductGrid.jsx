"use client";
import { useMemo, useState } from "react";
import { LuxeButton, LuxeCard } from "@/components/LuxeUI";

export default function ProductGrid({ products = [] }) {
  const [filters, setFilters] = useState({ type: "all" });

  const filtered = useMemo(() => {
    if (filters.type === "all") return products;
    return products.filter(p => p.type === filters.type);
  }, [products, filters]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["all","leggings","sports-bra","tank","tee","hoodie"].map((t) => (
          <button
            key={t}
            onClick={() => setFilters({ type: t })}
            className={`px-4 py-2 rounded-full border text-sm ${
              filters.type === t ? "bg-black text-white" : "bg-white text-zinc-800"
            }`}
          >
            {t.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <LuxeCard key={p.id} className="p-4">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-zinc-600">{p.subtitle}</p>
              </div>
              <p className="font-semibold">${(p.priceCents/100).toFixed(0)}</p>
            </div>
            <div className="mt-4">
              <LuxeButton
                href="#"
                variant="copper"
                className="w-full"
              >
                View
              </LuxeButton>
            </div>
          </LuxeCard>
        ))}
      </div>
    </div>
  );
}
