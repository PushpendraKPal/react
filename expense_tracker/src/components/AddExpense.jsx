import { useState } from "react";
import { AppCxt } from "../contaxt/appContext/AppContext";
import { addExpense } from "./crud";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [description, setDes] = useState("");
  const [category, setCategory] = useState("");

  const { exp, setExp } = AppCxt();

  const handleAddExpense = async () => {
    let data = await addExpense({ amount, description, category });
    setExp(data);
    setAmount("");
    setDes("");
    setCategory("");
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
        <button onClick={handleAddExpense}>Add</button>
      </div>
    </div>
  );
};

export default AddExpense;
