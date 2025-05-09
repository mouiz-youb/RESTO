import React from 'react'

function Button2(props) {
  return (
    <div className={`flex justify-center items-center gap-2 bg-[#D9D9D9] rounded-2xl p-2  cursor-pointer  ${props.className}`}>
        <p> {props.content} </p>
        {props.icon}
    </div>
  )
}

export default Button2