import React from 'react'
import Input from './Input'
import DoubleInput from './DoubleInput'

function Form() {
  return (
    <div className='w-2/3 h-full flex justify-center items-center gap-3 flex-col  '>
        <p className='text-3xl text-[#FF7C00]'>Welcome to MY Restauarnt !</p>
        <form action="" className='flex flex-col justify-center items-center gap-3 '>
            <DoubleInput className=" cursor-pointer w-full" type1="text" type2="text" label="User name " placeholder=" Enter your first name "  placeholder2="Enter your last name"  id="username"/>
            <Input className=" cursor-pointer w-full" type="text" label="Vehicle name" placeholder="Enter your restaurant’s email"  id="Vehicle"/>
            <DoubleInput className=" cursor-pointer w-full" type1="text" type2="text" label="Phone Number " placeholder=" Enter your phone number "  placeholder2="Enter your driver license number"  id="username"/>
            <Input className=" cursor-pointer w-full" type="text" label="Addresse" placeholder="Enter your vehicle type (car,motor,..."  id="Vehicle"/>
            <Input className=" cursor-pointer w-full" type="text" label="Password" placeholder="Enter your password"  id="Vehicle"/>
            <button type="submit" className='w-full flex justify-center items-center bg-[#F0AC56] p-2 text-white rounded-4xl cursor-pointer'>Create an account</button>
        </form>
    </div>
  )
}

export default Form