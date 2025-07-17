import React from "react";

const PositionBar = ({product="CNC", instrument="WIPRO", qty=1, avg=316.34, ltp=312.27, pnl=-7.45, chg=-1.24, isLoss=false}) => {
  return (
    <div className="bar flex gap-[0rem] lg:gap-[10rem] border-[#c8c8c8ac] border-b-1 font-[500]">
      <div className="flex w-[20%] py-[1rem]">
        <span className="text-red-500 font-[500] px-[2rem] py-[0.1rem] bg-red-200">
            {product}
        </span>
      </div>

      <div className="flex w-[40%] py-[1rem] justify-between">
        <span className="w-[33%]">
          <span>{instrument}</span>
        </span>
        
        <span className="w-[33%] flex justify-center">
          <span>{qty}</span>
        </span>
        
        <span className="w-[33%] flex justify-center">
          <span>{avg}</span>
        </span>
      </div>

      <div className="flex w-[40%] py-[1rem] justify-between">
        <span>{ltp}</span>
        <span className={pnl>0 ? "text-green-500" : "text-red-500"}>
            {pnl}%
        </span>
        <span className={isLoss ? "text-green-500 text-[0.9rem]" : "text-red-500 text-[0.9rem]"}>
            {chg}%
        </span>
      </div>
    </div>
  );
};

export default PositionBar;
