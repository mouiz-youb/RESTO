import React from 'react'
import RestoLogo from "../images/RestoLogo.svg"
import SearchBar from './SearchBar'
import Button from './Button'
import Icon from './Icon'
import ProfileButton from './ProfileButton'
import Avatar from "../images/Avatar.svg"
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5"
function Navbar() {
  return (
    <div className='col-start-1 col-end-2 row-start-1 row-end-2   grid grid-cols-10 grid-rows-1 gap-2 '>
        <div className='  col-start-1 col-end-3 row-start-1 row-end-2 p-2 '>
            <img src={RestoLogo} alt="" className='w-full h-full' />
        </div>
        <div className='  col-start-3 col-end-8 row-start-1 row-end-2 p-2.5  '>
        <SearchBar/>
        </div>
        <div className='  col-start-8 col-end-11 row-start-1 row-end- 2 flex justify-evenly items-center gap-3 flex-row p-2 cursor-pointer   '>
            <Button content="Logout" icon={<FiLogOut className=''/>}/>
            <Icon bg="bg-[#D9D9D9]" icon={<IoMdSettings className='text-xl'/>}/>
            <Icon bg="bg-[#D9D9D9]" icon={<IoNotificationsOutline className='text-xl'/>}/>
            <ProfileButton content="UserName" url={Avatar}/>
        </div>
    </div>
  )
}

export default Navbar