import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;

// let emptyYear = <p>NO EXPENSE DONE THIS YEAR </p>;

// if (filterYear.length > 0) {
//   emptyYear = filterYear.map((exp) => (
//     <ExpenseItem
//       key={exp.id}
//       title={exp.title}
//       amount={exp.amount}
//       date={exp.date}
//     />
//   ));
// }
