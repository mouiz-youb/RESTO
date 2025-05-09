import React ,{useState} from 'react'
import { FaStar } from "react-icons/fa";
function StartsLine() {
      const [isClicked, setisClicked] = useState(false)
  return (
    <div className='flex justify-center items-center gap-2 '>
        <p>Costumer ‘s feedback</p>
        <div className='flex justify-center items-center gap-1 '>
            <FaStar onClick={()=>setisClicked(prev=>!prev)} className= {`cursor-pointer ${!isClicked?`text-black`: `text-yellow-400`}`} />
            <FaStar onClick={()=>setisClicked(prev=>!prev)} className= {`cursor-pointer ${!isClicked?`text-black`: `text-yellow-400`}`} />
            <FaStar onClick={()=>setisClicked(prev=>!prev)} className= {`cursor-pointer ${!isClicked?`text-black`: `text-yellow-400`}`} />
            <FaStar onClick={()=>setisClicked(prev=>!prev)} className= {`cursor-pointer ${!isClicked?`text-black`: `text-yellow-400`}`} />
            <FaStar onClick={()=>setisClicked(prev=>!prev)} className= {`cursor-pointer ${!isClicked?`text-black`: `text-yellow-400`}`} />
        </div>
    </div>
  )
}

export default StartsLine