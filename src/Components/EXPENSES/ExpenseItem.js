import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div> {props.title}</div>
      <div className="expense-item__price">₹{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
