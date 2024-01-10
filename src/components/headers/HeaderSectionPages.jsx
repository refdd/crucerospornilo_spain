import React from "react";

function HeaderSectionPages({ title, desc }) {
  return (
    <div className="pt-4">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-[#17233e]  text-3xl capitalize text-center font-bold">
          {title}
        </h2>
        <p className="text-bsDark text-lg  capitalize text-center">{desc}</p>
      </div>
    </div>
  );
}

export default HeaderSectionPages;
