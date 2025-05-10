import React from 'react'
import "../index.css"
import Form from './Form'
import Fotter from './Fotter'
function SignupRigthSide() {
  return (
    <div className='w-full h-full after-right relative grid grid-cols-1 grid-rows-10 gap-5  '>
      <div className=' col-start-1  col-end-2 row-start-1 row-end-10 flex justify-center items-center   '>
        <Form/>
      </div>
      <div className='  col-start-1 col-end-2 row-start-10 row-end-11 flex justify-center items-center  '>
        <Fotter/>
      </div>
    </div>
  )
}

export default SignupRigthSide