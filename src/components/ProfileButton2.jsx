import React from 'react'

function ProfileButton2(props) {
  return (
    <div className={`flex justify-evenly items-center  gap-2 flex-row bg-[#F4BB6E] rounded-2xl p-1 cursor-pointer ${props.className}`}>
        <img src={props.url} alt="" className='w-8 h-8 bg-black rounded-full' />
        <p className='text-white '> {props.content} </p>
  </div>
  )
}

export default ProfileButton2