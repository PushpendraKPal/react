import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseRow = (props) => {
  const { date, name, amount, location } = props;

  const [price, newPrice] = useState(amount);

  const clickHandler = () => {
    newPrice(100);
  };

  return (
    <li className="itemsContainer">
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
    </li>
  );
};

export default ExpenseRow;
