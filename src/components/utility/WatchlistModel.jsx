import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';

const WatchlistModel = ({isModelOpenStatus, id}) => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/getHolding/${id}`).then((res) => {
      console.log("fetching watchlist data from DB");
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="absolute w-full h-full bg-[#14141467] flex justify-center items-center p-[1rem]">
            
            <form action="" className="w-full lg:w-[60%]">
              
              <div className="row p-[1rem] rounded-xl bg-white text-[1.5rem] font-[500] text-gray-600">

                <h1 className="col-lg-12 py-[1rem] text-gray-700 text-[2rem] font-[600]">{data.name}</h1>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem]">
                  <label htmlFor="">Qty</label>
                  <input className="bg-gray-300 rounded-xl p-[1rem]" type="number" />
                </div>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem]">
                  <label htmlFor="">Price</label>
                  <input className="bg-gray-300 rounded-xl p-[1rem]" type="number" />
                </div>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem]">
                  <button className="bg-blue-500 rounded-xl p-[1rem] text-white">Buy</button>
                </div>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem]">
                  <div onClick={() => isModelOpenStatus(false)} className="bg-green-500 text-center rounded-xl p-[1rem] text-white">Cancel</div>
                </div>
              </div>
            </form>

        </div>
  )
}

export default WatchlistModel