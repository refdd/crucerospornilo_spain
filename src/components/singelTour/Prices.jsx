import React from "react";
import { BiDollarCircle } from "react-icons/bi";

function Prices({ pricesData }) {
  return (
    <div>
      <div className="flex flex-col gap-3  ">
        <div className=" text-[#029e9d]  border-b">
          <BiDollarCircle size={70} />
          <h2 className="text-[#17233e] text-2xl font-playfair capitalize font-bold my-2">
            prices
          </h2>
        </div>

        <div className=" flex flex-col gap-5 md:flex-row md:py-4 md:gap-7 ">
          {pricesData?.map((prise) => (
            <div key={prise.id} className="flex flex-col  gap-2 md:flex-1  ">
              <h4 className="text-[#17233e] text-xl font-bold font-playfair capitalize ">
                {prise.title}
              </h4>
              <p
                className={
                  prise.triple
                    ? "text-[#777] font-playfair capitalize text-lg"
                    : " hidden text-[#777] font-playfair capitalize text-lg"
                }
              >
                <span className="font-mono text-[#029e9d]">
                  $ {prise.triple}
                </span>{" "}
                Per Person in Triple Room
              </p>
              <p
                className={
                  prise.double
                    ? "text-[#777] font-playfair capitalize text-lg"
                    : " hidden text-[#777] font-playfair capitalize text-lg"
                }
              >
                <span className="font-mono text-[#029e9d]">
                  $ {prise.double}
                </span>{" "}
                Per Person in Double Room
              </p>
              <p
                className={
                  prise.single
                    ? "text-[#777] font-playfair capitalize text-lg"
                    : " hidden text-[#777] font-playfair capitalize text-lg"
                }
              >
                <span className="font-mono text-[#029e9d]">
                  $ {prise.single}
                </span>{" "}
                One Person Traveling Alone
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prices;
