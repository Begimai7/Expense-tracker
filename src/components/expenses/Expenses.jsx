
import React, { useState } from 'react'
import { ExpensesList } from "./expensesList/ExpensesList"
import { ExpenseFilter } from "./expenseFilter/ExpenseFilter"
import { Chart } from "./Chart/Chart"
import styled from 'styled-components'

export const Expenses = ({expenses}) => {
const [selectedYear, setSelsctYear] = useState('2022')

 const getSelectedYear = (e) => {
  setSelsctYear(e.target.value)
 }  

const filteredYear = expenses.filter((elem) => {
  const fiteredYear = elem.date.getFullYear().toString();
  return  fiteredYear === selectedYear
})

  return (
    <ExpensesContainer>

    <ExpenseFilter value={selectedYear} onChange={getSelectedYear}/>
    <Chart items={filteredYear}/>
    <ExpensesList expenses={filteredYear}/>
    
    </ExpensesContainer>
  )
}

const ExpensesContainer = styled.div`
  width: 900px;
 margin: 1rem auto;
 background-color: rgb(22, 21, 21);
 border-radius: 10px;
 color: #fff;
 padding: 20px 10px;
`