import HeaderPages from "@/components/headers/HeaderPages";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { getData } from "../../../utils/featchApi";
const ListBlolgContainer = dynamic(() =>
  import("@/components/blog/ListBlolgContainer")
);
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));
export async function generateMetadata({ params: { slug }, searchParams }) {
  return {
    title: "Blog de viajes de Egipto | Guía de viaje de Egipto",
    description:
      "guía completa para viajar a Egipto será tu mejor compañera para preparar tu viaje de forma rápida, sencilla y eficaz ¡Disfruta de tu viaje a Egipto!",
  };
}
async function ListBlog() {
  const blog = await getData(`/posts`);
  // console.log(blog);
  return (
    <div>
      <HeaderPages
        typeList={"Blog de viajes de Egipto "}
        listSlug={{
          title: "Blog de viajes de Egipto",
          slug: "Blog-de-viajes-de-Egipto",
        }}
        singleSlug={""}
      />
      <div className="container mx-auto px-4 mt-28 md:px-10">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          <Suspense fallback={<>-----------</>}>
            <ListBlolgContainer dataBlog={blog?.data} />
          </Suspense>

          <div>
            <Suspense fallback={<>-----------</>}>
              <FormInquery />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBlog;
