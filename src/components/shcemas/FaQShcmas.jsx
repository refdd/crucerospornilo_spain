"use client";
import React from "react";
function FaQShcmas({ data }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.map((item, index) => ({
      "@type": "Question",
      name: item?.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item?.answer,
      },
    })),
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

export default FaQShcmas;
