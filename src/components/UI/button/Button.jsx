import React from 'react'
import styled from 'styled-components'

export const Button = ({children, ...rest}) => {
  return (
    <div>
     <Btn className='btn' {...rest}>{children}</Btn>
    </div>
  )
}
const Btn = styled.button`
   background-color: rgb(106, 22, 185);
 color: #fff;
 font-style: 20px;
 padding: 15px;
 border-radius: 8px;
 border: none;
 margin-left: 20px;
`