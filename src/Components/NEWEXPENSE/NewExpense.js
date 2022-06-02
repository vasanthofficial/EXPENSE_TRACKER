import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const dataHandler = (prevData) => {
    const data = {
      ...prevData,
      id: Math.random().toString(),
    };
    console.log("In-newExpense");
    console.log(data);

    props.onValues(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFunction={dataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
