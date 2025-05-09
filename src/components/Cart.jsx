import React from 'react'
import ProfileButton3 from './ProfileButton3'
import Avatar from "../images/Avatar.svg"
import Button from './Button'
function Cart(props) {
  return (
    <div className='w-full h-full   grid grid-cols-1 grid-rows-5 gap-3 p-2 bg-[#00000078] rounded-3xl'>
      <div className=' col-start-1 col-end-2 row-start-1  row-end-3 flex justify-center items-center gap-3 flex-row p-2  '>
      <ProfileButton3 content="UserName" url={Avatar} content2="+213 5 55 82 47 18"/>
      <Button content="Arrived" className="w-2/7 bg-[#F4BB6E] text-white cursor-pointer p-3 rounded-full " />
      </div>
      <div className='   text-white   col-start-1 col-end-2 row-start-3 row-end-5'>
        <p className='text-[13px]'>3  Italian pizza   S</p>
        <p className='text-[13px]'>1   Margherita    Xl</p>
        <p className='text-[13px]'>1   Pepperoni    S</p>
        <p className='text-[13px]'>2  Selecto      1L</p>
      </div>
      <div className='   text-white   col-start-1 col-end-2 row-start-5 row-end-6 flex justify-end items-center '>19:50</div>
    </div>
  )
}

export default Cart