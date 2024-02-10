import { useState } from "react";
import { addOneExpense, getAllExpense } from "../crud";
import { AppCxt } from "../contaxt/appContext/AppContext";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [description, setDes] = useState("");
  const [category, setCategory] = useState("Food");

  const { state, dispatch } = AppCxt();

  const handleAddExpense = async () => {
    //let url = "https://expense-tracker-1bae2-default-rtdb.firebaseio.com/";
    let newExp = { amount, description, category };
    dispatch({ type: "ADD_EXPENSE", payload: newExp });
    console.log("Trying to add");
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <div>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDes(e.target.value)}
        />
        <select
          name="category"
          onChange={(e) => {
            console.log("Selected value", e.target.value);
            setCategory(e.target.value);
          }}
          value={category}
        >
          <option value="Food">Food</option>
          <option value="Fuel">Fuel</option>
          <option value="Education">Education</option>
          <option value="Fair">Fair</option>
          <option value="Rent">Rent</option>
        </select>
      </div>
      <button onClick={handleAddExpense}>Add</button>
    </div>
  );
};

export default AddExpense;
