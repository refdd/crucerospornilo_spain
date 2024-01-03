import React from "react";

function CruiseFacilities({ facilities }) {
  //   console.log(facilities);
  return (
    <div>
      {facilities !== "<p>0</p>" && (
        <div className="">
          <h5 className="text-3xl text-[#17233e] font-semibold   capitalize  my-3 md:text-4xl ">
            Cruise Facilities
          </h5>
          <div
            dangerouslySetInnerHTML={{ __html: facilities ? facilities : "" }}
            className="textEditor"
          />
        </div>
      )}
    </div>
  );
}

export default CruiseFacilities;
