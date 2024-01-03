"use client";
import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

function PriceInformation({ notesData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // console.log(notesData);
  return (
    <div>
      <div className="mt-8 ">
        <div className="">
          {/* <button
          className="mb-4 text-blue-500 underline"
          onClick={handleExpandAll}
        >
          {isExpanded ? "Chiudi tutte le schede" : "Apri Tutte le tabe"}
        </button> */}
          {notesData?.map((q, index) => (
            <div
              key={index}
              className="border border-[#ebe6de] mb-4 rounded-lg"
            >
              <h3
                className={`flex items-center justify-between w-full  py-5 px-1 ${
                  activeIndex === index ? "bg-[#fff]" : "bg-bslight"
                }`}
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center gap-1 pl-5">
                  <h3 className="text-blackColor font-bold text-xl text-left">
                    {q.title}
                  </h3>
                </div>
                <div className="pr-3">
                  <MdKeyboardArrowUp
                    className={`text-black transition-all text-3xl  ${
                      activeIndex === index && " rotate-180 !text-primaryColor "
                    }`}
                  />
                </div>
              </h3>
              {(isExpanded || activeIndex === index) && (
                <div className="flex flex-col space-y-3 min-h-0 md:px-10 pb-7">
                  <div className="mt-2 text-base text-gray-500 capitalize">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: q.description ? q.description : "",
                      }}
                      className="textEditorItenerary text-base font-medium !leading-[34px] !text-black "
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceInformation;
