import React from 'react'
import Cart from './Cart'
function SectionTwoContent() {
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-3 gap-2 p-2  '>
        <Cart/>
        <Cart/>
        <Cart/>
    </div>
  )
}

export default SectionTwoContent