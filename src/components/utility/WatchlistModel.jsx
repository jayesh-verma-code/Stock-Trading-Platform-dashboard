import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';

const WatchlistModel = ({isModelOpenStatus, id, tradeType, getBnS}) => {

  const [data, setData] = useState({});

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setstockPrice] = useState(0.0);

  useEffect(() => {
    axios.get(`http://localhost:8080/getHolding/${id}`).then((res) => {
      console.log("fetching watchlist data from DB");
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const buyStock = () => {
    axios.post("http://localhost:8080/buyOrder", {
      name: data.name,
      qty: stockQuantity,
      price: stockPrice,
      mode: tradeType
    });

    isModelOpenStatus(false);
  };


  return (
    <div className="absolute  w-full h-full bg-[#14141467] flex justify-center items-center p-[1rem]">
            
            <form action="" className="scale-[0.9] w-[80%] lg:w-[60%] md:w-[80%] sm:w-[50%]">
              
              <div className="row p-[1rem] pt-0 rounded-xl bg-white text-[1.3rem] font-[500] text-gray-600">

                <h1 className="col-lg-12 flex items-center py-[1rem] text-gray-700 text-[1.8rem] font-[600]">{data.name} <span className='px-[0.7rem] mx-[1rem] text-[1rem] text-blue-500 bg-blue-300 rounded-[5px] p-[0.5rem]'>{tradeType}</span></h1>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem] text-gray-500">
                  <label htmlFor="">Qty</label>
                  <input className="bg-gray-300 rounded-xl p-[1rem]" type="number"  value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
                </div>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem] text-gray-500">
                  <label htmlFor="">Price</label>
                  <input className="bg-gray-300 rounded-xl p-[1rem]" type="number" value={stockPrice} onChange={(e) => setstockPrice(e.target.value)} />
                </div>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem]">
                  <button onClick={buyStock} className="bg-blue-500 rounded-xl p-[1rem] text-white">{tradeType}</button>
                </div>

                <div className="col-lg-6 p-[0.5rem] flex flex-col gap-[1rem]">
                  <div onClick={() => isModelOpenStatus(false)} className="cursor bg-gray-500 text-center rounded-xl p-[1rem] text-white">Cancel</div>
                </div>
              </div>
            </form>

        </div>
  )
}

export default WatchlistModel