import React from "react";
async function MainHeader() {
  return (
    <div className="">
      <div className="relative  w-full h-[70vh]  md:h-[80vh]  ">
        <video
          className=" w-full h-full object-cover"
          src={"https://api.nilecruisez.com/video/slidervideo.mp4"}
          autoPlay
          loop
          muted
        />
        {/* layout */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000063]  "></div>
        <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[99%] md:w-[70&]">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
            No se pierda esta increíble oportunidad de crear recuerdos para toda
            la vida con nuestros inolvidables cruceros por el Nilo.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
