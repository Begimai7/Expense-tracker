import React from 'react'
import "./ExpenseItem.css"

export const ExpenseItem = ({ data }) => {
  return (
    <li className='expenses-item'>
     <p className='expens-date'>{data.date.toString()}</p>
     <p className='expens-title'>{data.title}</p>
     <p className='expens-price'>{data.price}</p>
    </li>
  )
}
