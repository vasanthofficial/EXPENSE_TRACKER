import ExpensesFilter from '../NEWEXPENSE/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpensesList';
import './Expenses.css';
import React, { useState } from 'react';
function Expenses(props) {
  const [year, setYear] = useState('2019');

  const filterData = (prevData) => {
    console.log('IN EXPENSES');
    setYear(prevData);
    console.log(prevData);
  };

  //// FILTERING YEAR FEATURE
  const filterYear = props.expenses.filter((filterYear) => {
    return filterYear.date.getFullYear().toString() === year;
  });

  /// CONDITIONAL RENDERING

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter initial={year} onFunction={filterData}></ExpensesFilter>
        <ExpenseList items={filterYear} />
      </Card>
    </div>
  );
}

export default Expenses;
