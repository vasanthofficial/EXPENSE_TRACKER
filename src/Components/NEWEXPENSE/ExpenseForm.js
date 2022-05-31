import "./ExpensesForm.css";
import React from "react";

function ExpenseForm() {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");
  const titleHandler = (evt) => {
    console.log(evt.target.value);
  };
  const amountHandler = (evt) => {
    console.log(evt.target.value);
  };
  const dateHandler = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control  ">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control  ">
          <label>Amount</label>
          <input type="number" onChange={amountHandler} />
        </div>
        <div className="new-expense__control  ">
          <label>Date</label>
          <input type="date" onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
