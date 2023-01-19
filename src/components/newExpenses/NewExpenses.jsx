import React, { useState } from "react";
import { ExpenseForm } from "./expensForm/ExpenseForm";
import { Button } from "../UI/button/Button";
import styled from "styled-components";

export const NewExpenses = ({addNewExpenses}) => {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm((prevState) => !prevState);
  };
  return (
    <NewExpenseForm >
      {openForm ? (
        <ExpenseForm openFormHandler={openFormHandler} addNewExpenses={addNewExpenses} />
      ) : (
        <Button onClick={openFormHandler}>Добавить новый расход</Button>
      )}
    </NewExpenseForm>
  );
};

const NewExpenseForm = styled.div`
   background-color: rgb(145, 163, 190);
 padding: 30px;
 border-radius: 9px;
 width: 900px;
 margin: 2rem auto;
 text-align: start;
 font-weight: bold;
 text-align: center;
`