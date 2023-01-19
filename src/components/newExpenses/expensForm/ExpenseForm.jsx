import React, { useState } from "react";
import { Button } from "../../UI/button/Button";
import { InputForm } from "../../UI/inputForm/InputForm";
import "./ExpenseForm.css";

export const ExpenseForm = ({addNewExpenses, openFormHandler}) => {
  const [inputTitle, setInputTitle] = useState('')
  const [inputPrice, setInputPrice] = useState()
  const [inputAge, setInputAge] = useState()

  const titleInputChange = (e) => {
    setInputTitle(e.target.value)
  }
  const ageInputChange = (e) => {
    setInputPrice(e.target.value)
  }
  const dateInputChange = (e) => {
    setInputAge(e.target.value)
  }
  const submitNewExpenses = () => {

    const  expensesData = {
      title: inputTitle,
      price: inputPrice,
      date: inputAge
    }
    addNewExpenses(expensesData)
  }

  return (
    <div>
      <form className="input-form">
        <InputForm 
        id="title" 
        inputType="text" 
        labelText="Зоголовок"
        value={inputTitle}
        onChange={titleInputChange}
         />

        <InputForm
         id="price" 
         inputType="number" 
         labelText="Количество денег"
         value={inputPrice}
         onChange={ageInputChange}
         />

        <InputForm 
        id="date"
        inputType="date" 
        labelText="Дата"
        onChange={dateInputChange}
        />
      </form>
      <div className="buttons">
        <Button onClick={openFormHandler}>Отмена</Button>
        <Button onClick={submitNewExpenses}>Сохранить</Button>
      </div>
    </div>
  );
};
