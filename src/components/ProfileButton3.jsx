import React from 'react'

function ProfileButton3(props) {
  return (
    <div className={`w-2/3 flex justify-start gap-2  items-center bg-black flex-row border-[1px] border-black rounded-3xl  mt-2 mb-2`}>
    {props.icon? props.icon: <img src={props.url} className='w-12 bg-white rounded-3xl '/>}
    <div className='flex flex-col justify-center items-center '>
    <p className=' text-white text-2xl '> {props.content} </p>
    <p className=' text-white text-[10px] '> {props.content2} </p>
    </div>
  </div>
  )
}

export default ProfileButton3