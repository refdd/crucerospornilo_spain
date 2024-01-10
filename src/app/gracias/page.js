import HeaderPages from "@/components/headers/HeaderPages";
import OverviewThankYou from "@/components/thankYou/OverviewThankYou";
import React from "react";
export async function generateMetadata({ params: { slug }, searchParams }) {
  return {
    title:
      "Gracias, Recibimos Su Consulta Y Nos Pondremos En Contacto Con Usted En Breve",
    description:
      "Gracias, Recibimos Su Consulta Y Nos Pondremos En Contacto Con Usted En Breve En Su Correo Electrónico, Si No Recibió Una Repetición Dentro De Las Próximas 24 Horas, Verifique Su Correo No Deseado, Basura.",
  };
}
function Thank_you() {
  return (
    <div>
      <HeaderPages
        typeList={"Thank you"}
        listSlug={{ title: "Thank you", slug: "gracias" }}
        singleSlug={""}
      />
      <OverviewThankYou
        body={
          "We Received Your Inquiry And Will Contact You Shortly On Your Email If You Didn't Receive A Replay Withing The Next 24H Please Check Your Spam, Junk."
        }
        title={"Thank You"}
      />
    </div>
  );
}

export default Thank_you;
