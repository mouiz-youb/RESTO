import React from 'react'

function Button4(props) {
  return (
    <div className={`flex justify-center items-center gap-2 flex-col rounded-3xl text-center  ${props.className}`}>
        {props.icon}
        <p> {props.content} </p>
    </div>
  )
}

export default Button4