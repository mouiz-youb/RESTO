import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import RestoLogo from "../images/RestoLogo.svg"
import Button4 from './Button4';
function SignupLeftSide() {
  return (
    <div className='grid grid-cols-1 grid-rows-10 gap-2 w-full h-full '>
        <div className='col-start-1 col-end-2 row-start-2 row-end-5  flex justify-center items-center gap-5  '> 
            <FaStar className='text-2xl text-[#FF7C00]'/>
            <p className='text-2xl '>Start your delivery journey</p>
        </div>
        <div className='col-start-1 col-end-2 row-start-5 row-end-9  grid grid-cols-2 grid-rows-2 pt-4 pb-4 pl-6 pr-5  gap-5  '> 
            <Button4 icon={<FaRegUserCircle className='text-2xl '/>}  className="shadow-2xl      bg-[#F4BB6E] text-[#AC6621]" content="Create your business account" />
            <Button4 icon={<IoLocationOutline className='text-2xl '/>}  className="shadow-2xl      bg-[#F4BB6E] text-[#AC6621]" content="Share your Location" />
            <Button4 icon={<MdOutlineDeliveryDining className='text-2xl '/>}  className="shadow-2xl      bg-[#F4BB6E] text-[#AC6621]" content="Food delivery" />
            <Button4 icon={<RiFeedbackLine className='text-2xl '/>}  className="shadow-2xl      bg-[#F4BB6E] text-[#AC6621]" content="Leave feedback" />
        </div>
        <div className='col-start-1 col-end-2 row-start-9 row-end-11  flex justify-center items-center p-3'>
            <img src={RestoLogo} alt="" />
        </div>
    </div>
  )
}

export default SignupLeftSide