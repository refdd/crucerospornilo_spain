import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaHotel } from "react-icons/fa";

function Hotels({ hotelData }) {
  return (
    <div>
      {hotelData.length !== 0 && (
        <div className=" flex flex-col md:flex-row md:flex-wrap  gap-3  ">
          <div className=" text-[#029e9d]  border-b md:border-b-0 md:border-r md:p-3">
            <FaHotel size={70} />
            <h2 className="text-[#17233e] text-2xl font-playfair capitalize font-bold my-2">
              hotels
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3  md:border-r md:pr-3 md:w-[80%]">
            {hotelData?.map((hotel) => (
              <div key={hotel.id} className="">
                <div className=" relative w-full h-[210px] md:h-[140px]  ">
                  <Image
                    alt={"hotelImage"}
                    title={"hotelImage"}
                    src={hotel.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    quality={60}
                    // placeholder="blur"
                    // blurDataURL={modifiedImageUrl}
                    className=" object-cover rounded-md "
                  />
                </div>
                <p className="text-lg text-[#17233e] font-playfair capitalize my-2">
                  {hotel.title}
                </p>
                <div className="flex gap-2">
                  {}
                  {Array(hotel.stars)
                    .fill(<AiFillStar size={24} color="#ffbc00" />)
                    .map((item) => {
                      return item;
                    })}

                  {/* <BiStar  size={24} color="#ffbc00" />  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hotels;
