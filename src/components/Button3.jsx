import React from 'react'

function Button3(props) {
  return (
    <div className={props.className}>
      <p className='text-gary-500  '> {props.content} </p>
      {props.icon}
      {/* <p className='text-white bg-[#F4BB6E] cursor-pointer p-1 rounded-2xl'> {props.content2} </p> */}
      {props.content2?<p className='text-white bg-[#F4BB6E] cursor-pointer p-1 rounded-2xl'> {props.content2} </p>:null}
    </div>
  )
}

export default Button3