import React from 'react'
import { ExpenseItem } from '../expenseItem/ExpenseItem'
import "./ExpensesList.css"

export const ExpensesList = ({ expenses }) => {
  return (
    <ul className='expenses-list'>
     {
      expenses.map((elem) => (
       <ExpenseItem 
       key={elem.id}
       data={elem}/>
      ))
     }
    </ul>
  )
}
