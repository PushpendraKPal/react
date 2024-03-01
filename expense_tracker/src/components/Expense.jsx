import { useState } from "react";
import { AppCxt } from "../contaxt/appContext/AppContext";
import { getAllExpense, deleteExpense } from "./crud";
import EditExpense from "./EditExpense";

const Expense = ({ e }) => {
  const { exp, setExp } = AppCxt();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    let data = await getAllExpense();
    setExp(data);
  };

  return (
    <>
      {edit ? (
        <EditExpense e={e} setEdit={setEdit} />
      ) : (
        <tr>
          <td>{e.amount}</td>
          <td>{e.description}</td>
          <td>{e.category}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
          </td>
          <td>
            <button
              onClick={() => {
                handleDelete(e.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
};
export default Expense;
