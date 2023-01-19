import React from 'react'
import { ExpenseItem } from '../expenseItem/ExpenseItem'

import styled from 'styled-components'

export const ExpensesList = ({ expenses }) => {
  return (
    <ExpenseList >
     {
      expenses.map((elem) => (
       <ExpenseItem 
       key={elem.id}
       data={elem}/>
      ))
     }
    </ExpenseList>
  )
}
const ExpenseList = styled.ul`
   list-style: none;
`
