import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { date, name, amount, location } = props;

  // const clickHandler = (event) => {
  //   let parentDiv = event.currentTarget.parentNode;
  //   console.log(parentDiv);
  //   let grandparentNode = parentDiv.parentNode;
  //   grandparentNode.removeChild(parentDiv);
  // };

  const [price, newPrice] = useState(amount);

  const clickHandler = () => {
    newPrice(100);
  };

  return (
    <div className="itemsContainer">
      <div>
        <ExpenseDate date={date} key={date}></ExpenseDate>
      </div>
      <div>
        <span className="itemInfo">{name}</span>
        <span className="itemInfo">$ {price}</span>
        <span className="itemInfo">{location}</span>
      </div>
      <button className="del" onClick={clickHandler}>
        Change Amount $100
      </button>
    </div>
  );
};

export default ExpenseItem;
