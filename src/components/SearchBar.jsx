import React from 'react'
import Icon from './Icon'
import { IoSearch } from "react-icons/io5";
import "../index.css"
function SearchBar() {
  return (
    <div className='w-full h-full grid gris-cols-10 grid-rows-1 gap-5  rounded-3xl bg-[#D9D9D9] border-[#F4BB6E] border-[1px]  '>
        <input type="text" placeholder='Search Restaurant' className='col-start-2 col-end-9 row-start-1 row-end-2 focus'/>
        <div className='col-start-9 col-end-10 row-start-1 row-end-2 flex justify-end items-center'>
            <Icon icon={<IoSearch className='text-xl text-white  '/>} bg="bg-[#F4BB6E]"/>
        </div>
    </div>
  )
}

export default SearchBar