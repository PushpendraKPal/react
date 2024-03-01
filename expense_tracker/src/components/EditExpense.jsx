import { useState } from "react";
import { AppCxt } from "../contaxt/appContext/AppContext";
import { addExpense } from "./crud";
import { editExpense } from "./crud";

const EditExpense = ({ e, setEdit }) => {
  const [amount, setAmount] = useState(e.amount);
  const [description, setDes] = useState(e.description);
  const [category, setCategory] = useState(e.category);

  const { exp, setExp } = AppCxt();

  const handleEditExpense = async (e) => {
    let data = await editExpense({
      amount,
      description,
      category,
      id: e.id,
    });
    setExp(data);
    setEdit(false);
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDes(e.target.value)}
        />
      </td>
      <td>
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
      </td>
      <button onClick={() => handleEditExpense(e)}>Save</button>
    </tr>
  );
};

export default EditExpense;
