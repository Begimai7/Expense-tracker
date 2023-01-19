import React from 'react'
import styled from "styled-components"

export const ExpenseItem = ({ data }) => {
  return (
    <ExpensesItem>
     <ExpensesDate>{data.date.toString()}</ExpensesDate>
     <ExpensesTitle >{data.title}</ExpensesTitle>
     <ExpensesPrice >{data.price}</ExpensesPrice>
    </ExpensesItem>
  )
}

const ExpensesItem = styled.li`
   display: flex;
 width: 100%;
 justify-content: space-between;
 background-color: gray;
 border-radius: 15px; 
 margin-bottom: 15px;
`
const ExpensesDate = styled.p`
border: 1px solid #fff;
border-radius: 7px;
background-color: rgb(71, 70, 70);
margin-left: 15px;
padding: 10px 20px;
width: 300px;
`
const ExpensesTitle = styled.p`
font-size: 24px;
font-weight: bold;
  
`
const ExpensesPrice = styled.p`
 background-color: rgb(106, 22, 185);
 padding: 8px 20px;
 border-radius: 7px;
 margin-right: 20px;
`