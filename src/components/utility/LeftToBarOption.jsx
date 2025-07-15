import React from 'react'

const LeftToBarOption = ({name="NIFTY", loss=0.01, grow=0}) => {
  return (
    <div className='flex justify-center items-center gap-[2.5rem] text-[1.1rem]'>
        <span>{name}</span>
        <span className='text-red-500'>{loss}</span>
        <span className='text-green-500'>{grow}</span>
    </div>
  )
}

export default LeftToBarOption