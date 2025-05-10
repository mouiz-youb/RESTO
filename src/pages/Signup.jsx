import React from 'react'
import "../index.css"
import SignupLeftSide from '../components/SignupLeftSide'
import SignupRigthSide from '../components/SignupRigthSide'
function Signup() {
  return (
    <div className='grid grid-cols-10 grid-rows-1  w-screen h-screen '>
      <div className='col-start-1 col-end-5 row-start-1 row-end-2  back-Signup'>
        <SignupLeftSide/>
      </div>
      <div className='col-start-5 col-end-11 row-start-1 row-end-2  '>
        <SignupRigthSide/>
      </div>
    </div>
  )
}

export default Signup