// ==========================================
// ✅ LuxeRun™ Proto 01 Product Schema — JSON-LD v1.1
// Author: Sloane Sterling
// ==========================================

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://luxesculptperformance.com/run/#luxerun-proto01",

  name: "LuxeRun™ Proto 01 Compression Legging",
  alternateName: "LuxeRun Prototype 01",
  description:
    "High-compression performance legwear engineered for sprint, strength, and endurance mastery — featuring raised muscle architecture, adaptive pressure zones, and recovery-driven nylon-spandex blend.",
  sku: "LX-RUN-P01",
  brand: {
    "@type": "Brand",
    "@id": "https://luxesculptperformance.com/#brand",
    name: "LuxeSculpt™ Performance",
    url: "https://luxesculptperformance.com",
    logo: "https://luxesculptperformance.com/brand/LUXESCULPT-ICON.PNG",
    sameAs: [
      "https://www.instagram.com/sloanesterlingc/",
      "https://www.tiktok.com/@sloanesterling",
    ],
  },
  image: [
    "https://luxesculptperformance.com/images/luxerun_proto01_front.jpg",
    "https://luxesculptperformance.com/images/luxerun_proto01_side.jpg",
    "https://luxesculptperformance.com/images/luxerun_proto01_back.jpg",
  ],
  category: "Women's Compression Legwear",
  material: "240–250 gsm nylon-spandex compression blend",
  color: "Matte-black with subtle sheen",
  size: ["XS", "S", "M", "L", "XL"],

  audience: {
    "@type": "PeopleAudience",
    audienceType: "Athletes, Runners, High-Performance Trainers",
    geographicArea: {
      "@type": "AdministrativeArea",
      name: "United States",
    },
  },

  offers: {
    "@type": "Offer",
    url: "https://luxesculptperformance.com/run",
    priceCurrency: "USD",
    price: "138.00",
    priceValidUntil: "2026-01-01",
    availability: "https://schema.org/PreOrder",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "LuxeSculpt™ Performance",
      url: "https://luxesculptperformance.com",
    },
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
  },

  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Elite Runner Test Group",
      },
      datePublished: "2025-09-15",
      reviewBody:
        "Exceptional compression mapping and adaptive muscle support — the LuxeRun Proto 01 sets a new benchmark for high-performance running gear.",
      name: "Performance Review — LuxeRun Proto 01",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};
