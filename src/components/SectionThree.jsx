import React ,{useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Button from './Button';
import Chef3 from "../images/Chef3.png"
import Button3 from './Button3';
import Button2 from './Button2';
import "../index.css"


function SectionThree() {
 
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-10 gap-3 p-2 bg-gray-200 rounded-3xl '>
        <div className='col-start-1 col-end-2  row-start-1 row-end-7 flex flex-col justify-center items-center gap-2 p-3  '>
        <Button2 content="My account" icon={<FaUserCircle className='text-3xl '/>}  className="bg-[#00000078] w-full rounded-4xl flex justify-between items-center p-2.5 text-white"/>
        <Button3 type="text"  value="car"    content="VehicleType: " content2="Modify" className="pl-5 w-full flex justify-between items-center flex-row bg-white rounded-2xl p-1"/>
        <Button icon={<IoMdCall/>} className="pl-5 w-full flex justify-start items-center bg-white text-gray-400" content="+213 5 55 82 47 18"/>
        <Button3 type="text"  value="BMW"  content="VehicleName : " content2="Modify" className=" pl-5 w-full flex justify-between items-center flex-row bg-white rounded-2xl p-1"/>
        <Button3 type="number"  value="2025"  content="VehicleYear : " content2="Modify" className=" pl-5 w-full flex justify-between items-center flex-row bg-white rounded-2xl p-1"/>
        <Button3 type="color"  value="Black"  content="VehicleColor : " content2="Modify" className=" pl-5 w-full flex justify-between items-center flex-row bg-white rounded-2xl p-1"/>
        {/* <input type="color" /> */}
        </div>
        <div className='col-start-1 col-end-2   row-start-7 row-end-11 grid grid-cols-1 grid-rows-5  '>
          <div className='col-start-1 col-end-2 row-start-1 row-end-5  '>
            <img src={Chef3} alt=""  className='w-full h-full mt-5 '/>
          </div>
          <div className='col-start-1 col-end-2 row-start-5 row-end-6 pl-5 pr-5   '>
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