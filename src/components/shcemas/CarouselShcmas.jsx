"use client";
import React from "react";

function CarouselShcmas({ data }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.egyptfortravel.com/Egypt/egypt-travel-packages/egypt-honeymoon-packages",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.egyptfortravel.com/Egypt/egypt-travel-packages/cairo-and-luxor-tour",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.egyptfortravel.com/Egypt/egypt-travel-packages/egypt-budget-tour",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.egyptfortravel.com/Egypt/egypt-travel-packages/best-egypt-tours",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.egyptfortravel.com/Egypt/egypt-travel-packages/egypt-tour-with-round-trip-nile-cruise",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

export default CarouselShcmas;
