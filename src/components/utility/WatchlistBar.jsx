import React, {useState} from "react";
import { ChevronUp, ChevronDown} from "lucide-react";
import WatchlistHoverBar from "./WatchlistHoverBar";

const WatchlistBar = ({
  name = "NIFY",
  valuePercent = -1.61,
  amount = 1555.46,
}) => {
  const [hover, sethover] = useState(false);
  return (
    <div className="relative flex justify-between w-full px-[2rem] py-[1rem] border-[#c8c8c8ac] border-b-1"
    onMouseOver={() => {return sethover(true)}}
    onMouseLeave={() => {return sethover(false)}}
    >
      <div className={valuePercent > 0 ? "text-green-600" : "text-red-500"}>
        {name}
      </div>
      <div className="flex w-[10rem] shrink-0 justify-evenly gap-[1rem] items-start">
        <span className="text-gray-500">{valuePercent}%</span>
        <span className={valuePercent > 0 ? "text-green-600" : "text-red-500"}>
          {valuePercent > 0 ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </span>
        <span className={valuePercent > 0 ? "text-green-600" : "text-red-500"}>
          {amount}
        </span>
      </div>

      {hover ? <WatchlistHoverBar/> : null}
    </div>
  );
};

export default WatchlistBar;
