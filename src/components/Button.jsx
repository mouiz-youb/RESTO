import React from 'react'

function Button(props) {
  return (
    <div className={`flex justify-center items-center gap-2 bg-[#D9D9D9] rounded-2xl p-1  cursor-pointer  ${props.className}`}>
        {props.icon}
        <p> {props.content} </p>
    </div>
  )
}

export default Button