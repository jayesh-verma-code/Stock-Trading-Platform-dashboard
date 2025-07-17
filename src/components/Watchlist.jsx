import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import WatchlistBar from "./utility/WatchlistBar";
import holdingData  from "./utility/holdingData";

const Watchlist = () => {

  return (
    <div className="col-lg-4 col-md-4 col-sm-12 h-[calc(100vh-6.2rem)] border-[#c8c8c8ac] border-r-1 border-l-1 border-b-1">
      <div className="row">
        <div className="col-lg-12 p-[1.5rem] px-[2rem] flex justify-between border-[#c8c8c8ac] border-b-1">
          <span className="text-[1rem] text-gray-800">
            Search eginfy, bse, nifty fut weekly, gold, mcx.
          </span>
          <span className="text-[1rem] text-gray-500">{holdingData.length}/50</span>
        </div>
        <div className="wrapper flex flex-col shrink-0 w-full overflow-auto border-b-1 border-[#c8c8c8ac]">
          {holdingData.map((item, index) => {
            const curValue = item.price * item.qty;
            const pnl = curValue - item.avg * item.qty;
            return (<WatchlistBar
              key={index}
              name={item.name}
              valuePercent={item.net}
              amount={curValue}
            />)
         })}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
