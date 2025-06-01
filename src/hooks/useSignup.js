
import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
export const useSignup=()=>{
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const signup =async(states)=>{
      try {
        setloading(true)
        seterror(false)
        const response= await axios.post("url",states)
        if (response === null || response.status !== 200) {
          seterror(true)
          toast.error("Error in signup")
          setloading(false)        
        }
        if (response.status === 201) {
          setloading(false)
          toast.success("Signup success")
          const data = response.data
          console.log(data)
          // Perform any additional actions with the data if needed
          // store the response data in local storage or state management
          const token = data.token
          const user= data.user
          localStorage.setItem("token", token)
          localStorage.setItem("user", JSON.stringify(user))
          // Redirect to the desired page after successful signup
          navigate("/delevery")
        }
      } catch (error) {
        toast.error("Error in signup")
        setloading(false)
        console.error("Error in signup:", error)
      }
    }
    return {signup,loading,error}
}