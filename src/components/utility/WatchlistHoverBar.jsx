import React from 'react'
import {ChartNoAxesColumn, Ellipsis } from 'lucide-react';

const WatchlistHoverBar = () => {
  return (
    <div className="absolute flex justify-end items-center gap-[1rem] px-[2rem] h-full w-full bg-[#e0e0e042] top-0 left-0">
        <a href="" className="p-[0.4rem] px-[0.8rem]  rounded-[2px] bg-red-500 text-white">Buy</a>
        <a href="" className="p-[0.4rem] px-[0.8rem]  rounded-[2px] bg-blue-500 text-white">Sell</a>
        <a href="" className="p-[0.4rem] px-[0.8rem]  rounded-[2px] bg-[#fff] text-grat-800"><ChartNoAxesColumn size={16} strokeWidth={1.25} /></a>
        <a href="" className="p-[0.4rem] px-[0.8rem]  rounded-[2px] bg-[#fff] text-grat-800"><Ellipsis size={16} strokeWidth={1.25} /></a>
    </div>
  )
}

export default WatchlistHoverBar