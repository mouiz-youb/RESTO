
import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useStoreOrder } from "../store/useStoreOrder"


export const useOrder=()=>{
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const order = useStoreOrder((state) => state.order)
    const setOrder = useStoreOrder((state) => state.setOrder)
    const orders =async(states)=>{
      try {
        setloading(true)
        seterror(false)
        const response= await axios.post("http://127.0.0.1:8000/auth/signup/driver/", data)
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
        setOrder(data)
          // Redirect to the desired page after successful signup
          navigate("/delevery")
        }
      } catch (error) {
        toast.error("Error in orders")
        setloading(false)
        console.error("Error in orders:", error)
      }
    }
    return {orders,loading,error}
}