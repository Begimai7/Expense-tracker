import "./Expenses.css"
import React, { useState } from 'react'
import { ExpensesList } from "./expensesList/ExpensesList"
import "./Expenses.css"
import { ExpenseFilter } from "./expenseFilter/ExpenseFilter"
import { Chart } from "./Chart/Chart"

export const Expenses = ({expenses}) => {
const [selectedYear, setSelsctYear] = useState('2021')

 const getSelectedYear = (e) => {
  setSelsctYear(e.target.value)
 }  

const filteredYear = expenses.filter((elem) => {
  const fiteredYear = elem.date.getFullYear().toString();
  return  fiteredYear === selectedYear
})

  return (
    <div className="expenses-container">

    <ExpenseFilter value={selectedYear} onChange={getSelectedYear}/>
    <Chart items={filteredYear}/>
    <ExpensesList expenses={filteredYear}/>
    </div>
  )
}

