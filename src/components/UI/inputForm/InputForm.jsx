import React from 'react'
import "./InputForm.css"

export const InputForm = ({id, labelText, inputType, ...rest}) => {
  return (
    <div>
     <label htmlFor={id}>{labelText}</label>
     <input className='input' type={inputType} id={id} {...rest} />
    </div>
  )
}
