import React ,{useState} from 'react'
import Input from './Input'
import DoubleInput from './DoubleInput'
import {useSignup} from '../hooks/useSignup'
import toast from 'react-hot-toast'
function Form() {
  const {signup,loading,error} = useSignup()
  const [FormData, setFormData] = useState({
    username_FirstName: "",
    username_lastnameName: "",
    Vehicle_Type: "",
    phone_Number: "",
    Email: "",
    vehicle_Name: "",
    vehicle_Color: "",
    password: "",
  })
  const handleChange =(e)=>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const handleSubmit =async (e) => {
    e.preventDefault()
    console.log(FormData)
    const {username_FirstName, username_lastnameName, email, password, phoneNumber, address} = FormData
    if (!username_FirstName || !username_lastnameName || !email || !password || !phoneNumber || !address) {
      toast("Please fill in all fields")
      return
    } 
    if (password.length < 6) {
      toast("Password must be at least 6 characters long")
      return
    }
    if (phoneNumber.length < 10) {
      toast("Phone number must be at least 10 characters long")
      return
    }
    if (phoneNumber.length > 15) {
      toast("Phone number must be at most 15 characters long")
      return
    }
    // pass the data to the signup function
    await signup(FormData)
  }
  return (
    <div className='w-2/3 h-full flex justify-center items-center gap-3 flex-col  '>
        <p className='text-3xl text-[#FF7C00]'>Welcome to MY Restauarnt !</p>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 '>
            <DoubleInput
            id2="username5"
            className=" cursor-pointer w-full" type1="text" type2="text" 
            label="User name " 
            name1="username_FirstName"
            name2="username_lastnameName"
            placeholder=" Enter your first name "  
            placeholder2="Enter your last name"  
            id="username"
            onChange= {handleChange} />
            <Input 
            onChange={handleChange}  name="email" 
            className=" cursor-pointer w-full" 
            type="text" 
            label="Vehicle_Type" 
            placeholder="Enter your vehicle type "  
            id="Vehicle"/>
            <DoubleInput
            id2="username4"
            className=" cursor-pointer w-full" type1="text" type2="email" 
            label="Phone Number " 
            name1="phone_Number"
            name2="Email"
            onChange={handleChange}
            placeholder=" Enter your phone number "  
            placeholder2="Enter your Email"  
            id="username1"/>
            <DoubleInput
            id2="username4"
            className=" cursor-pointer w-full" type1="text" type2="text" 
            label="Vehicle name & Vehicle Color" 
            name1="vehicle_Name"
            name2="vehicle_Color"
            onChange={handleChange}
            placeholder=" Enter your Vehicle name "  
            placeholder2="Enter your Vehicle Color"  
            id="username1"/>
            <Input 
            onChange={handleChange}  name="password" 
            className=" cursor-pointer w-full" 
            type="password" 
            label="Password" 
            placeholder="Enter your password"  
            id="Vehicle2"/>
            <button type="submit" 
            className='w-full flex justify-center items-center bg-[#F0AC56] p-2 text-white rounded-4xl cursor-pointer'>Create an account</button>
        </form>
    </div>
  )
}

export default Form