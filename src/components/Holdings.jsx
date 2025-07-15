import React from "react";
import HoldingBar from "./utility/HoldingBar";
import holdingData from "./utility/holdingData";

const Holdings = () => {
  return (
    <div className="flex flex-col p-[3rem] w-full">
      <h1 className="text-[2.1rem] font-[500] text-gray-700 pb-[2rem]">Holding (15)</h1>

      <div className="wrapper flex flex-col shrink-0 border-[#c8c8c8ac] border-b-1 border-t-1 h-[64vh] overflow-auto text-gray-500">
        <HoldingBar />
        {holdingData.map((item, index) => (
          <HoldingBar key={index} {...item} />
        ))}
      </div>

      <div className="final-result flex pt-[3rem] gap-[8rem] text-gray-700">
        <div>
          <h1 className="text-[2.5rem] font-[500]">29,875</h1>
          <p className="text-[1.2rem]">Total investment</p>
        </div>

        <div>
          <h1 className="text-[2.5rem] font-[500]">31,428</h1>
          <p className="text-[1.2rem]">Current value</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
