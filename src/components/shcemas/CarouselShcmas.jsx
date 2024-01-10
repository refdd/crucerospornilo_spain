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
        url: "https://www.crucerospornilo.com/viajar-egipto/Tours-a-Egipto/viaje-egipto-5-dias",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.crucerospornilo.com/viajar-egipto/Tours-a-Egipto/Tours-a-Egipto/paquetes-baratos-egipto",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.crucerospornilo.com/viajar-egipto/Tours-a-Egipto/crucero-por-el-nilo-y-el-cairo",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.crucerospornilo.com/viajar-egipto/Tours-a-Egipto/egypt-vacation-package",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.crucerospornilo.com/viajar-egipto/crucero-egipto/crucero-radamis-ii",
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
