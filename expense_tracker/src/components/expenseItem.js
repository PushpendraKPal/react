import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const { date, name, amount, location } = props;

  return (
    <div className="itemsContainer">
      <div>
        <ExpenseDate date={date}></ExpenseDate>
      </div>
      <div>
        <span className="itemInfo">{name}</span>
        <span className="itemInfo">{amount * 10}</span>
        <span className="itemInfo">{location}</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
