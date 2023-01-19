import React from 'react'
import styled from "styled-components"

export const ExpenseFilter = ({ value, onChange}) => {
  return (
    <FilterYear>
     <h3>Фильтр по году</h3>

     <ExpenseSelect value={value} onChange={onChange}>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
     </ExpenseSelect>
    </FilterYear>
  )
}

const FilterYear = styled.div`
  display: flex;
 align-items: center;
 justify-content: space-between;
 margin: 0 15px;
`
const ExpenseSelect = styled.select`
   padding: 10px 25px;
 border-radius: 8px;
 font-size: 24px;
 font-weight: bold;
`