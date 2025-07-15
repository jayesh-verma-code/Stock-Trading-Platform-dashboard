import React from 'react'
import {Clock} from 'lucide-react';

const Funds = () => {
  return (
    <div className='p-[3rem]'>

      <div className='flex justify-end items-end text-gray-500 gap-[1rem] text-[1.2rem] pb-[6rem]'>
        <p>Instant, zero-cost fund transfer with UPI.</p>
        <a href="" className='text-[1.2rem] font-[500] text-white p-[1rem] bg-green-500 rounded-[5px]'>Add funds</a>
        <a href="" className='text-[1.2rem] font-[500] text-white p-[1rem] bg-blue-500 rounded-[5px]'>Withdraw</a>
      </div>

      <div className='flex items-center gap-[1rem] font-[500] text-gray-500 text-[1.7rem] py-[1.5rem]'>
        <span></span><Clock size={20} strokeWidth={1.5} />
        <span>Equity</span>
      </div>

      <div className='row'>

        <div  className='wrapper flex flex-col px-[2rem] border-[#c8c8c8ac] border-1 rounded-xl col-lg-4 col-md-6 col-sm-6 col-12 text-[1.2rem] text-gray-500'>

        <div className='flex flex-col py-[2rem] gap-[1rem] border-[#c8c8c8ac] border-b-1'>
            <span className='flex justify-between items-end'>
                <span>Available margin</span>
                <span className='text-[1.5rem] text-blue-500 font-[500]'>4,043.10</span>
            </span>
            <span className='flex justify-between'>
                <span>Used margin</span>
                <span className='text-[1.5rem] font-[500]'>3,757.30</span>
            </span>
            <span className='flex justify-between'>
                <span>Available cash</span>
                <span className='text-[1.5rem] font-[500]'>4,043.10</span>
            </span>
        </div>

        <div className='flex flex-col py-[2rem] gap-[1.5rem] border-[#c8c8c8ac] border-b-1'>
            <span className='flex justify-between'>
                <span>Opening Balance</span>
                <span className='font-[500]'>4,043.10</span>
            </span>
            <span className='flex justify-between'>
                <span>Opening Balance</span>
                <span className='font-[500]'>3,043.10</span>
            </span>
            <span className='flex justify-between'>
               <span>Payin</span>
                <span className='font-[500]'>4,063.10</span>
            </span>
            <span className='flex justify-between'>
                <span>SPAN</span>
                <span>0.00</span>
            </span>
            <span className='flex justify-between'>
                <span>Delivery margin</span>
                <span>0.00</span>
            </span>
            <span className='flex justify-between'>
                <span>Options premium</span>
                <span>0.00</span>
            </span>
        </div>

        <div className='flex flex-col py-[2rem] gap-[1.5rem] border-[#c8c8c8ac] border-b-1'>
            <span className='flex justify-between'>
                <span>Collateral (Liquid funds)</span>
                <span>0.00</span>
            </span>
            <span className='flex justify-between'>
                <span>Collateral (Equity)</span>
                <span>0.00</span>
            </span>
            <span className='flex justify-between'>
                <span>Total Collateral</span>
                <span>0.00</span>
            </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Funds