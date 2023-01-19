import React from 'react'
import "./ExpenseFilter.css"

export const ExpenseFilter = ({ value, onChange}) => {
  return (
    <div className='filter-year'>
     <h3>Фильтр по году</h3>

     <select value={value} onChange={onChange} className='expense-select'>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
     </select>
    </div>
  )
}
