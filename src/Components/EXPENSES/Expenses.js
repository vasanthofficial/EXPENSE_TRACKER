import ExpensesFilter from "../NEWEXPENSE/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
function Expenses(props) {
  const [year, setYear] = useState("2019");

  const filterData = (prevData) => {
    console.log("IN EXPENSES");
    setYear(prevData);
    console.log(prevData);
  };

  //// FILTERING YEAR FEATURE
  const filterYear = props.expenses.filter((filterYear) => {
    return filterYear.date.getFullYear().toString() === year;
  });

  /// CONDITIONAL RENDERING

  let emptyYear = <p>NO EXPENSE DONE THIS YEAR </p>;

  if (filterYear.length > 0) {
    emptyYear = filterYear.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter initial={year} onFunction={filterData}></ExpensesFilter>
        {emptyYear}
      </Card>
    </div>
  );
}

export default Expenses;
