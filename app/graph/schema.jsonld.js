export const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://luxesculptperformance.com/#organization",
      "name": "LuxeSculpt™ Performance",
      "url": "https://luxesculptperformance.com",
      "logo": "https://luxesculptperformance.com/brand/LUXESCULPT-ICON.png",
      "founder": {
        "@type": "Person",
        "name": "Sloane Sterling",
        "url": "https://sloanesterling.com"
      },
      "sameAs": [
        "https://www.instagram.com/sloanesterling",
        "https://www.tiktok.com/@sloanesterling",
        "https://sloanesterling.com"
      ]
    },
    {
      "@type": "Product",
      "@id": "https://luxesculptperformance.com/#luxerun-proto01",
      "name": "LuxeRun Proto 01 Compression Legging",
      "brand": {
        "@type": "Brand",
        "name": "LuxeSculpt™ Performance"
      },
      "url": "https://luxesculptperformance.com/shop/luxerun",
      "image": "https://luxesculptperformance.com/images/luxerun-proto01.jpg",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "149.00",
        "availability": "https://schema.org/PreOrder"
      }
    }
  ]
};
