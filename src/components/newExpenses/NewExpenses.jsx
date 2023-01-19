import React, { useState } from "react";
import { ExpenseForm } from "./expensForm/ExpenseForm";
import { Button } from "../UI/button/Button";
import "./NewExpenses.css";

export const NewExpenses = ({addNewExpenses}) => {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm((prevState) => !prevState);
  };
  return (
    <div className="new-expense__form">
      {openForm ? (
        <ExpenseForm openFormHandler={openFormHandler} addNewExpenses={addNewExpenses} />
      ) : (
        <Button onClick={openFormHandler}>Добавить новый расход</Button>
      )}
    </div>
  );
};
