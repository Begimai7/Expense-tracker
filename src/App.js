import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpenses } from "./components/newExpenses/NewExpenses";
import styled from "styled-components";

const DUMMY__EXPENSES = [
  {
    title: 'New York',
    price: 400,
    date: new Date(2023, 9, 24),
    id: 1
  },
  {
    title: 'Toys',
    price: 700,
    date: new Date(2021, 5, 22),
    id: 2
  },
  {
    title: 'Jaket',
    price: 560,
    date: new Date(2022, 4, 5),
    id: 3
  },
  {
    title: 'Ice Cream',
    price: 900,
    date: new Date(2020, 6, 14),
    id: 4
  },
  {
    title: 'Jaket',
    price: 1000,
    date: new Date(2022, 3, 5),
    id: 5
  },
  {
    title: 'Biscuit',
    price: 1900,
    date: new Date(2020, 7, 14),
    id: 6
  },
]

function App() {
const [expenses, setExpenses] = useState(DUMMY__EXPENSES)

  const addNewExpenses = (expensesData) => {
    const updatedExpenses = [...expenses]
    updatedExpenses.push(expensesData)
    setExpenses(updatedExpenses)
  }
  console.log(expenses);
  return(
    <Container>
   <NewExpenses addNewExpenses={addNewExpenses}/>
   <Expenses expenses={expenses}/>
    </Container>
  )
}
export default App;

const Container = styled.div`
text-align: center;
  background-color: rgb(61, 60, 60);
  padding: 30px;

`