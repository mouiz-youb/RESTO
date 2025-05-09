import React from 'react'
import SectionOneContent from './SectionOneContent'
import Button from './Button'
import { GoHomeFill } from "react-icons/go";
function SectionOne() {
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-10 gap-3 '>
        <div className='col-start-1 col-end-2  row-start-1 row-end-2 grid grid-cols-2 grid-rows-1 gap-5 pl-5 pr-5 '>
            <Button icon={<GoHomeFill/>}  className=" rounded-4xl"content="Home"/>
            <Button  className=" rounded-4xl"content="find customer"/>
        </div>
        <div className='col-start-1 col-end-2  row-start-2 row-end-11 pt-2 pb-2 pl-4 pr-4 '>
            <SectionOneContent/>
        </div>
    </div>
  )
}

export default SectionOne