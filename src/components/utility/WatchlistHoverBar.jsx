import React, {useState} from 'react'
import {ChartNoAxesColumn, Ellipsis } from 'lucide-react';

const WatchlistHoverBar = ({id, isModelOpenStatus, handleWatchlistId, getBnS}) => {

  const handleBuyButton = () => {
    getBnS("BUY"); // Set to BUY
    handleWatchlistId(id);
    // Add a small delay to ensure state is updated before opening modal
    setTimeout(() => {
      isModelOpenStatus(true);
    }, 0);
  };

  const handleSellButton = () => {
    getBnS("SELL"); // Set to SELL
    handleWatchlistId(id);
    // Add a small delay to ensure state is updated before opening modal
    setTimeout(() => {
      isModelOpenStatus(true);
    }, 0);
  };

  return (
    <div className="absolute flex justify-end items-center gap-[1rem] px-[2rem] h-full w-full bg-[#e0e0e042] top-0 left-0">
      <div 
        onClick={handleBuyButton} 
        className="cursor-pointer p-[0.4rem] px-[0.8rem] rounded-[2px] bg-red-500 text-white"
      >
        Buy
      </div>
      <div 
        onClick={handleSellButton} 
        className="cursor-pointer p-[0.4rem] px-[0.8rem] rounded-[2px] bg-blue-500 text-white"
      >
        Sell
      </div>
      <div className="p-[0.4rem] px-[0.8rem] rounded-[2px] bg-[#fff] text-gray-800">
        <ChartNoAxesColumn size={16} strokeWidth={1.25} />
      </div>
      <div className="p-[0.4rem] px-[0.8rem] rounded-[2px] bg-[#fff] text-gray-800">
        <Ellipsis size={16} strokeWidth={1.25} />
      </div>
    </div>
  )
}

export default WatchlistHoverBar