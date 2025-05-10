import React from 'react'
import Cart from './Cart'
import "../index.css"
function SectionTwoContent() {
  return (
    <div className='w-full h-full s flex flex-col justify-center items-center gap-3 pb-10'>
      {/* Changed to h-auto with max-h-screen and overflow-y-auto */}
      <div className=' w-full  h-auto grid   gap-3 overflow-y-auto pb-20 scrollbar'>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
    </div>
  )
}

export default SectionTwoContent