import React from 'react'
import {FolderOpenDot} from 'lucide-react';

const Apps = () => {
  return (
    <div className='flex flex-col justify-center items-center p-[3rem] text-gray-700'>
      <div className='text-blue-400 pb-[1rem]'><FolderOpenDot size={40} strokeWidth={1.75} /></div>
      <p className='text-[1.2rem] font-[500] py-[0.7rem] px-[2rem] rounded-xl text-white bg-blue-400'>View all projects.</p>
    </div>
  )
}

export default Apps