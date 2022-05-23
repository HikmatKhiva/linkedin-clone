import React from 'react'
import './inputOptions.css'
const InputOptions = ({ title, Icon, color, }) => {
  return (
    <div className='input-option'>
      <Icon className="input-icons" style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOptions