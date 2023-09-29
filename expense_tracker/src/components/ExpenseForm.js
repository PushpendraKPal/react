import { useState } from "react";

const ExpenseForm = (props) => {
  const [name, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const clickHandler = () => {
    console.log(props.data);
    props.setData([{ date, amount, name, location }, ...props.data]);
    setTitle("");
    setDate("");
    setAmount("");
    setLocation("");
  };

  return (
    <form>
      <label>Title</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label>Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <label>Location</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <button onClick={clickHandler}>Add</button>
    </form>
  );
};

export default ExpenseForm;
