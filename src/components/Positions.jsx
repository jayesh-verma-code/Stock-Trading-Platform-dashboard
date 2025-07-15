import React from "react";
import PositionBar from "./utility/PositionBar";
import positionData from "./utility/positionData";

const Positions = () => {
  let totalPnl = 0;
  for (const data of positionData) {
    totalPnl += data.pnl;
  }
  return (
    <div className="flex flex-col gap-[1rem] p-[3rem]">
      <h1 className="text-[2.1rem] font-[500] text-gray-700 pb-[1rem]">
        Position (2)
      </h1>
      <div className="wrapper flex flex-col shrink-0 w-full h-[50vh] overflow-auto border-[#c8c8c8ac] border-b-1 border-t-1">
        <div className="bar flex gap-[0rem] lg:gap-[10rem] border-[#c8c8c8ac] border-b-1 text-gray-500">
          <div className="flex w-[20%] py-[1rem]">
            <span>Product</span>
          </div>

          <div className="flex w-[40%] py-[1rem] justify-between">
            <span className="w-[33%]">
              <span>Instrument</span>
            </span>
            
            <span className="w-[33%] flex justify-center">
              <span>Qty</span>
            </span>

            <span className="w-[33%] flex justify-center">
              <span>Avg.</span>
            </span>
          </div>

          <div className="flex w-[40%] py-[1rem] justify-between">
            <span>LTP</span>
            <span>P&L</span>
            <span>Chg.</span>
          </div>
        </div>
        {positionData.map((data, index) => (
          <PositionBar key={index} {...data} />
        ))}
      </div>

      <PositionBar
        product="TOTAL"
        instrument=""
        qty={null}
        avg={null}
        ltp={null}
        chg={null}

        pnl={totalPnl.toFixed(2)}
      />
    </div>
  );
};

export default Positions;
