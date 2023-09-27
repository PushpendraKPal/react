import "./expenseItem.css";

function ExpenseItem(props) {
  const { date, name, amount, location } = props;

  return (
    <div className="itemsContainer">
      <p className="items">
        <span>{date}</span>
        <span className="itemInfo">{name}</span>
        <span className="itemInfo">{amount * 10}</span>
        <span className="itemInfo">{location}</span>
      </p>
    </div>
  );
}

export default ExpenseItem;
