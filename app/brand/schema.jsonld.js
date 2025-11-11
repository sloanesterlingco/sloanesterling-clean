// ==========================================
// ✅ LuxeSculpt™ Brand Schema — JSON-LD v1.1
// Author: Sloane Sterling
// ==========================================

export const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://luxesculptperformance.com/#brand",

  name: "LuxeSculpt™ Performance",
  alternateName: "LuxeSculpt Activewear",
  slogan: "Engineered for Performance. Designed for Precision.",

  description:
    "LuxeSculpt™ Performance is a women’s high-end athleticwear brand founded by Sloane Sterling — merging elite compression technology, biomechanical design, and modern luxury aesthetics across categories like LuxeRun™, LuxeGoat™, LuxeFlow™, LuxeCycle™, and LuxeSwag™.",

  url: "https://luxesculptperformance.com",
  logo: "https://luxesculptperformance.com/brand/LUXESCULPT-ICON.PNG",
  image: "https://luxesculptperformance.com/brand/og-image.jpg",
  brandColor: "#000000",
  foundingDate: "2024-01-01",

  foundingLocation: {
    "@type": "Place",
    name: "Salt Lake City, Utah, USA",
  },

  founder: {
    "@type": "Person",
    "@id": "https://sloanesterling.com/#person",
    name: "Sloane Sterling",
    jobTitle: "Founder & Creative Director",
    sameAs: [
      "https://www.instagram.com/sloanesterlingc/",
      "https://www.tiktok.com/@sloanesterling",
    ],
  },

  sameAs: [
    "https://luxesculptperformance.com",
    "https://www.instagram.com/sloanesterlingc/",
    "https://www.tiktok.com/@sloanesterling",
  ],

  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "team@sloanesterling.com",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],

  brand: {
    "@type": "Thing",
    name: "LuxeSculpt™ Performance Apparel",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "LuxeSculpt™ Performance Lines",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "LuxeRun™ — High-Compression Legwear",
      },
      {
        "@type": "OfferCatalog",
        name: "LuxeGoat™ — Trail & Elevation Line",
      },
      {
        "@type": "OfferCatalog",
        name: "LuxeFlow™ — Studio & Recovery Collection",
      },
      {
        "@type": "OfferCatalog",
        name: "LuxeCycle™ — Road & Spinwear Division",
      },
      {
        "@type": "OfferCatalog",
        name: "LuxeSwag™ — Accessories & Essentials",
      },
    ],
  },
};
