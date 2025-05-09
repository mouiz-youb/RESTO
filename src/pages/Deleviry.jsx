import React from 'react'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

function Deleviry() {
  return (
    <div className='col-start-1 col-end-2 row-start-2 row-end-11  grid grid-cols-3 grid-rows-1 gap-3 '>
        <div className='col-start-1 col-end-2 row-start-1 row-end-2  '>
          <SectionOne/>
        </div>
        <div className='col-start-2 col-end-3 row-start-1 row-end-2 '>
          <SectionTwo/>
        </div>
        <div className='col-start-3 col-end-4 row-start-1 row-end-2 pl-5 pr-3 '>
          <SectionThree/>
        </div>
    </div>
  )
}

export default Deleviry