import React from 'react'

function DoubleInput(props) {
  return (
    <div className={`flex flex-col justify-center items-start gap-2 ${props.className}`}>
    <label htmlFor={props.id}> {props.label} </label>
    <div className='flex flex-row justify-center items-center gap-2 '>
        <input className='w-full  pt-2.5 pb-2.5 pl-4 pr-2.5  border-[1px] border-[#F0AC56] placeholder:text-[#F0AC56] rounded-4xl ' type={props.type1} name="" id={props.id} placeholder={props.placeholder} />
        <input className='w-full  pt-2.5 pb-2.5 pl-4 pr-2.5  border-[1px] border-[#F0AC56] placeholder:text-[#F0AC56] rounded-4xl ' type={props.type2} name="" id={props.id} placeholder={props.placeholder2} />
    </div>
</div>
  )
}

export default DoubleInput