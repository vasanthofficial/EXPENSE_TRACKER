import "./ExpensesForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  /// States

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  ///Handlers
  const titleHandler = (evt) => {
    setTitle(evt.target.value);
  };
  const amountHandler = (evt) => {
    setAmount(evt.target.value);
  };
  const dateHandler = (evt) => {
    setDate(evt.target.value);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    const data = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log("In-expenseForm");
    console.log(data);
    setTitle("");
    setAmount("");
    setDate("");

    props.onFunction(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control  ">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control  ">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control  ">
          <label>Date</label>
          <input type="date" value={date} onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
