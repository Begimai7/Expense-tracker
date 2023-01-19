import React from 'react'
import { ChartBar } from './ChartBar/ChartBar'
import styled from 'styled-components';



export const Chart = ({items}) => {
 const maximumPrice = 2000;
 const months = [
 
  {
   label: "January",
   currentPrice: 0,
   
  },
  {
   label: "Fabuary",
   currentPrice: 0,
  },
  {
   label: "March",
   currentPrice: 0,
  },
  {
   label: "May",
   currentPrice: 0,
  },
  {
   label: "June",
   currentPrice: 0,
  },
  {
   label: "July",
   currentPrice: 0,
  },
  {
   label: "Augost",
   currentPrice: 0,
  },
  {
   label: "September",
   currentPrice: 0,
  },
  {
   label: "October",
   currentPrice: 0,
  },
  {
   label: "Novomber",
   currentPrice: 0,
  },
  {
   label: "December",
   currentPrice: 0,
  },
 ]
 

 items.forEach(item => {
  const monthNumber = item.date.getMonth();
  months[monthNumber].currentPrice += item.price;
 });
 
  return (
  

    <ExpensesChart>

     {months.map((item) => {
      return (
       <ChartBar 
       key={item.label}
       label={item.label} 
       currentPrice={item.currentPrice} 
       maximumPrice={maximumPrice}/>
      );
     })}

    </ExpensesChart>
  )
}

const ExpensesChart = styled.div`
 background-color: azure;
 border-radius: 10px;
 padding: 10px;
 border: none;
 height: 8rem;
 display: flex;
 justify-content: space-around;
 text-align: center;
`