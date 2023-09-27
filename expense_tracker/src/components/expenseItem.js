import "./expenseItem.css";

function ExpenseItem() {
  let itemName = "Food";
  let date = new Date(20022, 10, 20);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  date = day + "/" + month + "/" + year;

  let amount = 200;
  let location = "Delhi";
  return (
    <div>
      <h2 className="heading">Expense Items</h2>
      <div className="itemsContainer">
        <p className="items">
          <span>{date}</span>
          <span className="itemInfo">{itemName}</span>
          <span className="itemInfo">{amount}</span>
          <span className="itemInfo">{location}</span>
        </p>
      </div>
    </div>
  );
}

export default ExpenseItem;
