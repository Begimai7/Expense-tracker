import React from 'react'
import "./Button.css"

export const Button = ({children, ...rest}) => {
  return (
    <div>
     <button className='btn' {...rest}>{children}</button>
    </div>
  )
}
