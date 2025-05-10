import React from 'react'

function Input(props) {
  return (
    <div className={`flex flex-col justify-center  items-start gap-2 ${props.className}`}>
        <label htmlFor={props.id}> {props.label} </label>
        <input className='w-full pt-2.5 pb-2.5 pl-4 pr-2.5  border-[1px] border-[#F0AC56] placeholder:text-[#F0AC56] rounded-4xl ' type={props.type} name="" id={props.id} placeholder={props.placeholder} />
    </div>
  )
}

export default Input