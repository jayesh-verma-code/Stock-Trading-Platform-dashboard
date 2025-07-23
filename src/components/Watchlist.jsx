import React, {useState, useEffect} from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import WatchlistBar from "./utility/WatchlistBar";
import holdingData  from "./utility/holdingData";
import axios from "axios";
import WatchlistModel from "./utility/WatchlistModel";
import WatchlistGraph from "./graph/WatchlistGraph";

const Watchlist = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  // isModelOpen state
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleModelOpen  = (status) => {
    setIsModelOpen(status);
  };

  // watchlist id
  const [watchlistId, setWatchlistId] = useState("");
  const handleWatchlistId = (id) => {
    setWatchlistId(id);
  };

  // buy or sell 
  const [BnS, setBnS] = useState("BUY");
  const getBnS = (value) => {
      setBnS(value);
  };


  useEffect(() => {
    // fetching holdings data from database.
    axios.get("http://localhost:8080/allHoldings").then((res) => {
      console.log("fetching holding data from DB");
      setAllHoldings(res.data);
    });
  },[]);

  return (
    <div className="col-lg-4 col-md-4 col-sm-12 flex flex-col shrink-0 h-[92vh] overflow-y-auto border-[#c8c8c8ac] border-r-1 border-l-1 border-b-1">
      <div className="row relative">
        <div className="col-lg-12 p-[1.5rem] px-[2rem] flex justify-between border-[#c8c8c8ac] border-b-1">
          <span className="text-[1rem] text-gray-800">
            Search eginfy, bse, nifty fut weekly, gold, mcx.
          </span>
          <span className="text-[1rem] text-gray-500">{allHoldings.length}/50</span>
        </div>

        <div className="wrapper flex flex-col shrink-0 w-full overflow-auto border-b-1 border-[#c8c8c8ac]">
          {allHoldings.map((item, index) => {
            const curValue = item.price * item.qty;
            const pnl = curValue - item.avg * item.qty;
            return (<WatchlistBar
              key={item._id}
              name={item.name}
              valuePercent={item.net}
              amount={curValue}
              id={item._id}
              isModelOpenStatus={handleModelOpen}
              handleWatchlistId={handleWatchlistId}
              getBnS={getBnS}
            />)
         })}
        </div>

         {isModelOpen && <WatchlistModel isModelOpenStatus={handleModelOpen}
                                         id={watchlistId}
                                         tradeType={BnS}
                                         getBnS={getBnS}  /> }
      </div>

      <div>Watchlist Pie chart</div>
      <WatchlistGraph allHoldings={allHoldings}/>
    </div>
  );
};

export default Watchlist;
