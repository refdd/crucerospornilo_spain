import React from "react";
import Hotels from "./Hotels";
import Prices from "./Prices";
import PriceInformation from "./PriceInformation";

function AccommodationPrice({ notsPrise, template_prices }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8">
        {template_prices?.map((item) => (
          <div className="" key={item.id}>
            <div className="">
              <h3 className="text-center text-xl text-gray-900 font-playfair capitalize my-3 font-semibold md:text-left">
                {" "}
                {item.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <Hotels hotelData={item.hotels} />
              <Prices pricesData={item.price_types} />
            </div>
          </div>
        ))}
      </div>
      <PriceInformation notesData={notsPrise} />
    </div>
  );
}

export default AccommodationPrice;
