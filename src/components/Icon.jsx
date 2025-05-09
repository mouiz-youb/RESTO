import React from 'react'

function Icon(props) {
  return (
    <div className={`flex justify-center items-center rounded-full p-2 ${props.bg}`}>
        {props.icon}
    </div>
  )
}

export default Icon