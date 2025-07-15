import React from 'react'
import {PackageOpen} from 'lucide-react';

const Orders = () => {
  return (
    <div className='flex flex-col justify-center items-center p-[3rem] text-gray-700'>
      <div className='text-blue-400'><PackageOpen size={40} strokeWidth={1.75} /></div>
      <p className='text-[1.5rem] font-[500] py-[1rem]'>Not add yet</p>
    </div>
  )
}

export default Orders