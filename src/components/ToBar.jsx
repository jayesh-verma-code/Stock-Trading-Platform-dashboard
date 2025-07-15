import React from 'react'
import Menu from './Menu'
import LeftToBarOption from './utility/LeftToBarOption'

const ToBar = () => {
  return (
    <div className='row flex'>
        <Menu/>
        <div className='leftToBar py-[2rem] col-lg-4 col-md-4 col-sm-12 flex justify-evenly border-[#c9c9c9ca] border-b-[1px] '>
            <LeftToBarOption/>
            <LeftToBarOption name={"SENSEX"}/>
        </div> 
        
    </div>
  )
}

export default ToBar