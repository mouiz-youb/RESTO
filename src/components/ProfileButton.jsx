import React from 'react'

function ProfileButton(props) {
  return (
    <div className={ props.className?props.className:`flex justify-center items-center  gap-2 flex-row bg-[#F4BB6E] rounded-4xl p-1 cursor-pointer`}>
      <p className='text-white '> {props.content} </p>
      {props.icon? props.icon: <img src={props.url} className='w-8'/>}
    </div>
  )
}

export default ProfileButton