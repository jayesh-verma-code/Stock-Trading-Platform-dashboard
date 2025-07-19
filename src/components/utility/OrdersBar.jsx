import React from "react";

const OrdersBar = ({name, mode, date, qty, price}) => {
  return (
    <div className="bar col-lg-12 flex border-[#c8c8c8ac] border-t-1 text-gray-700 font-[500]">
      <span className="w-[20%]  p-[1rem] border-[#c8c8c8ac] border-r-1">
        <span>{name}</span>
      </span>
      <span className="w-[20%]  p-[1rem] border-[#c8c8c8ac] border-r-1 flex justify-center">
        <span className={mode==="BUY" ? "text-green-500 font-[500] bg-green-200 px-[1rem] h-fit" : "text-blue-500 font-[500] bg-blue-200 px-[1rem] h-fit"}>{mode}</span>
      </span>
      <span className="w-[20%] p-[1rem] border-[#c8c8c8ac] border-r-1 flex justify-center">
        <span>{date}</span>
      </span>
      <span className="w-[20%] p-[1rem] border-[#c8c8c8ac] border-r-1 flex justify-center">
        <span>{qty}</span>
      </span>
      <span className="w-[20%] p-[1rem] flex justify-center">
        <span className="text-green-500">₹{price}</span>
      </span>
    </div>
  );
};

export default OrdersBar;
