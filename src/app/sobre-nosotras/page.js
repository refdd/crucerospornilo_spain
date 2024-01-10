import AboutUsSection from "@/components/Aboutus/AboutUsSection";
import CounterSection from "@/components/Aboutus/CounterSection";
import HeaderPages from "@/components/headers/HeaderPages";
import dynamic from "next/dynamic";
import React from "react";
const Testimonials = dynamic(() =>
  import("@/components/testimonials/Testimonials")
);
const FindPerfectTour = dynamic(() =>
  import("@/components/perfectTour/FindPerfectTour")
);
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
export async function generateMetadata({ params: { slug }, searchParams }) {
  return {
    title: "Sobre nosotras |",
    description:
      "Around Egypt Tours is a young innovative travel company yet matured and experienced Founded in 2005 Lee mas",
  };
}
function AboutUs() {
  return (
    <div>
      <HeaderPages
        typeList={"ABOUT US"}
        listSlug={{ title: " ABOUT US", slug: "sobre-nosotras" }}
        singleSlug={""}
      />
      <AboutUsSection />
      <CounterSection />
      <FindPerfectTour />
      <Testimonials />
      <ExploreSection />
    </div>
  );
}

export default AboutUs;
