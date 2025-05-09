import React ,{useState} from 'react'
import "../index.css"
import ProfileButton2 from './ProfileButton2'
import ProfileButton from './ProfileButton'
import ProfileButton3 from './ProfileButton3'
import Avatar from "../images/Avatar.svg"
import Button from './Button'
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
// import Icon from "./Icon"
import { FaUserCircle } from "react-icons/fa";
import StartsLine from './StartsLine'
function SectionOneContent() {
  const [progress, setProgress] = useState(0)

  console.log(progress)
  return (
    <div className='w-full h-full grid grid-cols-1 grid-row-10 gap-2 p-2  bg-gray-200 rounded-4xl   '>
        <div className=' col-start-1 col-end-2 row-start-1 row-end-8 back-bg  rounded-4xl flex justify-center  items-start p-3  '>
          {/* <ProfileButton2 content="UserName" url={Avatar} className="w-2/3"/> */}
          <ProfileButton3 content="UserName" url={Avatar} />
        </div>
        <div className=' col-start-1 col-end-2 row-start-8 row-end-10  flex justify-center items-center gap-2 p-2 flex-col '>
          <Button icon={<IoMdCall/>} className="w-full" content="+213 5 55 82 47 18"/>
          <Button icon={<IoLocationSharp/>} className="w-full" content="Enter your location link"/>
          <StartsLine/>
          <div className='flex justify-center items-center gap-2 w-full flex-col'>
            <progress  value="50" max="100" className="w-full  h-3 rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-400 [&::-webkit-progress-value]:bg-[#1F753C] [&::-moz-progress-bar]:bg-[#1F753C]"></progress>
            <progress  value="50" max="100" className="w-full  h-3 rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-400 [&::-webkit-progress-value]:bg-[#1F753C] [&::-moz-progress-bar]:bg-[#1F753C]"></progress>
            <progress  value="50" max="100" className="w-full  h-3 rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-400 [&::-webkit-progress-value]:bg-[#1F753C] [&::-moz-progress-bar]:bg-[#1F753C]"></progress>
            <progress  value="50" max="100" className="w-full  h-3 rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-400 [&::-webkit-progress-value]:bg-[#1F753C] [&::-moz-progress-bar]:bg-[#1F753C]"></progress>
            <progress  value="50" max="100" className="w-full  h-3 rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-400 [&::-webkit-progress-value]:bg-[#1F753C] [&::-moz-progress-bar]:bg-[#1F753C]"></progress>
          </div>
        </div>
        <div className=' col-start-1 col-end-2 row-start-10 row-end-11  flex justify-between items-center '>
        <ProfileButton content="UserName" icon={<FaUserCircle className='text-3xl text-white'/>}   className="w-full flex  justify-center items-center  gap-2 flex-row bg-gray-500 rounded-3xl  pt-2 pb-2 pl-3 pr-3  cursor-pointer"/>
        </div>
    </div>
  )
}
{/* <FaRegCircleUser className='text-xl'/>
<Icon icon={<FaRegCircleUser className='text-xl'/> */}
export default SectionOneContent