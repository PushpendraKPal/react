import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const { date, name, amount, location } = props;

  const clickHandler = (event) => {
    let parentDiv = event.currentTarget.parentNode;
    console.log(parentDiv);
    let grandparentNode = parentDiv.parentNode;
    grandparentNode.removeChild(parentDiv);
  };

  return (
    <div className="itemsContainer">
      <div>
        <ExpenseDate date={date} key={date}></ExpenseDate>
      </div>
      <div>
        <span className="itemInfo">{name}</span>
        <span className="itemInfo">{amount * 10}</span>
        <span className="itemInfo">{location}</span>
      </div>
      <button className="del" onClick={clickHandler}>
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
