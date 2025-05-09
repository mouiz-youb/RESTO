import React from 'react'
import ProfileButton from './ProfileButton'
import { FaUserCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Button from './Button';
import Chef2 from "../images/Chef2.svg"
// import Button2 from './Button2';
import Button3 from './Button3';
import "../index.css"
function SectionThree() {
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-10 gap-3 p-2 bg-gray-200 rounded-3xl '>
        <div className='col-start-1 col-end-2  row-start-1 row-end-7 flex flex-col justify-center items-center gap-2 p-3  '>
        {/* <ProfileButton content="UserName" icon={<FaUserCircle className='text-3xl text-white'/>}   className="w-full flex  justify-between items-center  gap-2 flex-row bg-gray-500 rounded-3xl    cursor-pointer"/> */}
        <Button3 content="My account" icon={<FaUserCircle className='text-3xl '/>}  className="w-full bold text-xl flex justify-center gap-4  items-center flex-row bg-gray-500 text-white p-1 rounded-2xl"/>
        {/* <Button2 icon={<FaUserCircle className='text-3xl '/>} className="w-full flex justify-evenly items-center bg-gray-700 text-white" content="UserName"/> */}
        <Button3 content="Vehicle type: car" content2="Modify" className="pl-5 w-full flex justify-between items-center flex-row bg-white p-1 rounded-2xl"/>
        <Button icon={<IoMdCall/>} className="pl-5 w-full flex justify-start items-center bg-white text-gray-400" content="+213 5 55 82 47 18"/>
        <Button3 content="Vehicle name : I10" content2="Modify" className=" pl-5 w-full flex justify-between items-center flex-row bg-white p-1 rounded-2xl"/>
        <Button3 content="Vehicle year : 2016" content2="Modify" className=" pl-5 w-full flex justify-between items-center flex-row bg-white p-1 rounded-2xl"/>
        <Button3 content="Vehicle color : 2016" content2="Modify" className=" pl-5 w-full flex justify-between items-center flex-row bg-white p-1 rounded-2xl"/>
        
        </div>
        <div className='col-start-1 col-end-2  row-start-7 row-end-11 grid grid-cols-1 grid-rows-3  '>
          <div className='col-start-1 col-end-2 row-start-1 row-end-3'>
            <img src={Chef2} alt=""  className='w-full h-full mt-2.5'/>
          </div>
          <div className='col-start-1 col-end-2 row-start-3 row-end-4 pl-5 pr-5  '>
            <div className='flex flex-col justify-center items-center gap-1 ml-5 mr-5  rounded-3xl bg-gray-500 text-white text-[13px]'>
              <p>Your can modify your vehicle infos </p>
              <p>by clicking on modify !</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SectionThree