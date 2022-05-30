import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTittle] = useState(props.title);
  function clickHandler() {
    setTittle("Updated!!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>{title}</div>
      <div className="expense-item__price">₹{props.amount}</div>
      <div>
        <button onClick={clickHandler}>CLICK ME</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
