import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';
import './NewExpense.css';
function NewExpense(props) {
  const dataHandler = (prevData) => {
    const data = {
      ...prevData,
      id: Math.random().toString(),
    };
    console.log('In-newExpense');
    console.log(data);

    props.onValues(data);
    setEditState(false);
  };
  const [editState, setEditState] = useState(false);

  const addExpensehandler = () => {
    setEditState(true);
  };

  const cancelHandler = () => {
    setEditState(false);
  };

  return (
    <div className="new-expense">
      {!editState && (
        <button onClick={addExpensehandler}>Add New-Expense</button>
      )}
      {editState && (
        <ExpenseForm
          onFunction={dataHandler}
          cancelHandler={cancelHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
