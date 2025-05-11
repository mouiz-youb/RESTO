import React from 'react'
import Button from "./Button"
import SectionTwoContent from './SectionTwoContent'
function SectionTwo() {
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-10 gap-3 '>
        <div className='col-start-1 col-end-2  row-start-1 row-end-2 grid grid-cols-2 grid-rows-1 gap-5  pl-5 pr-5 '>
            <Button className=" bold text-white bg-black rounded-4xl"content="findRestaurant"/>
            <Button className=" bold text-white bg-black rounded-4xl"content="Shareposition"/>
        </div>
        <div className='col-start-1 col-end-2  row-start-2 row-end-11'>
            <SectionTwoContent/>
        </div>
    </div>
  )
}

export default SectionTwo