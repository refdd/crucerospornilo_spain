import CustomizeTourLayout from "@/components/customizeTour/CustomizeTourLayout";
import HeaderPages from "@/components/headers/HeaderPages";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const ExploreSection = dynamic(() =>
  import("@/components/explore/ExploreSection")
);
const FaqSection = dynamic(() => import("@/components/FaqSection/FaqSection"));
export async function generateMetadata({ params: { slug }, searchParams }) {
  return {
    title:
      "Egypt Trip Planning | Plan a Vacation to Egypt | Egypt Trip Planner",
    description:
      " Está planeando Organizar Viaje a Egipto Ofrecemos todo lo que necesita en Egipto, cubriendo todas las ciudades y atracciones, nos ocuparemos de todas sus necesidades ¡Pregunte ahora!",
  };
}
function InquireNow() {
  return (
    <div>
      <HeaderPages
        typeList={"Customize Your Tour"}
        listSlug={{ title: " Inquire Now", slug: "organizar-viaje-egipto" }}
        singleSlug={""}
      />
      <CustomizeTourLayout />
      <Suspense fallback={<>-----------</>}>
        <ExploreSection />
        <FaqSection />
      </Suspense>
    </div>
  );
}

export default InquireNow;
