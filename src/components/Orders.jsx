import React, { useEffect, useState } from 'react'
import {PackageOpen} from 'lucide-react';
import axios from 'axios';
import OrdersBar from './utility/OrdersBar';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/allOrders")
     .then((res) => {
      console.log("fetching all data from orders")
      setAllOrders(res.data);
     });
  },[]);

  return (
    // <div className='flex flex-col justify-center items-center p-[3rem] text-gray-700'>
    //   <div className='text-blue-400'><PackageOpen size={40} strokeWidth={1.75} /></div>
    //   <p className='text-[1.5rem] font-[500] py-[1rem]'>Not add yet</p>
    // </div>
    <div className='p-[3rem] flex flex-col'>
      <h1 className='text-[2rem] font-[500] text-gray-700 pb-[3rem]'>Orders ({allOrders.length})</h1>

      <div className='wrapper row border-[#c8c8c8ac] border-1 text-[1.2rem] text-gray-700'>
        <div className='bar col-lg-12 flex'>
            <span className='w-[20%]  p-[1rem] border-[#c8c8c8ac] border-r-1'>
              <span>Instrument</span>
            </span>
            <span className='w-[20%]  p-[1rem] border-[#c8c8c8ac] border-r-1 flex justify-center'>
              <span>Trade</span>
            </span>
            <span className='w-[20%] p-[1rem] border-[#c8c8c8ac] border-r-1 flex justify-center'>
              <span>Date</span>
            </span>
            <span className='w-[20%] p-[1rem] border-[#c8c8c8ac] border-r-1 flex justify-center'>
              <span>Qty</span>
            </span>
            <span className='w-[20%] p-[1rem] flex justify-center'>
              <span>Price</span>
            </span>
        </div>

        {allOrders.map((item) => {
          return (<OrdersBar name={item.name}
                   mode={item.mode}
                   date={item.date}
                   qty={item.qty}
                   price={item.price.toFixed(2)}/>)
        })}
      </div>
    </div>
  )
}

export default Orders