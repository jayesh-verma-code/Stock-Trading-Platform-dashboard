import React from "react";

const HoldingBar = ({instrument="Instrument", qty="Qty", avgCost="Avg. cost", lpt="LPT", curVal="Cur. val", pnl="P&L", netChg="Net. chg", dayChg="Day. chg", data=false, isLoss=false, color}) => {
  return (
    <div className="bar flex justify-between border-[#c8c8c8ac] border-b-1" style={{color: data ? "black" : ""}}>
      <span className="py-[1rem] text-center w-[20%] border-[#c8c8c8ac] border-r  border-l-1">
        {instrument}
      </span>

      <span className="py-[1rem] w-[35%] border-[#c8c8c8ac] border-r flex justify-evenly px-[2rem]">
        <span className="w-[33%]">
          <span>{qty}</span>
        </span>
        <span className="w-[33%] flex justify-center">
          <span>{avgCost}</span>
        </span>
        <span className="w-[33%] flex justify-end">
          <span>{lpt}</span>
        </span>
      </span>

      <span className="py-[1rem] w-[45%] border-[#c8c8c8ac] border-r flex justify-between px-[2rem] items-center">
        <span className="w-[24%]">
          <span>{curVal}</span>
        </span>

        <span className="w-[24%] flex justify-center">
          <span className={(pnl>=0) ? "text-green-500" : "text-red-500"} style={{color:color}}>
            {pnl}
        </span>
        </span>

        <span className="w-[24%] flex justify-center">
          <span className={(pnl>0) ? "text-green-500" : "text-red-500"} style={{color:color}}>
            {netChg}%
        </span>
        </span>

        <span className="w-[24%] flex justify-center text-[0.9rem]">
          <span className={(isLoss) ? "text-green-500" : "text-red-500"} style={{color:color}}>
            {dayChg}%
        </span>
        </span>
      </span>
    </div>
  );
};

export default HoldingBar;
