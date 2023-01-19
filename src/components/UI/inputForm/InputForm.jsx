import React from 'react'
import styled from 'styled-components'

export const InputForm = ({id, labelText, inputType, ...rest}) => {
  return (
    <div>
     <label htmlFor={id}>{labelText}</label>
     <Input className='input' type={inputType} id={id} {...rest} />
    </div>
  )
}

const Input = styled.input`
 padding: 7px;
 margin: 10px 0;
 width: 90%;
 border-radius: 8px;
 border: none;
`