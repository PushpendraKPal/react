import { useState } from "react";
import { getAllExpense, deleteExpense } from "./crud";
import EditExpense from "./EditExpense";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseActions } from "../store/store";

const Expense = ({ e }) => {
  const [edit, setEdit] = useState(false);

  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = async (id, userId) => {
    let data = await deleteExpense({ id, userId });
    dispatch(ExpenseActions.addExpense(data));
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
            <button className="sh_btn edit" onClick={handleEdit}>
              Edit
            </button>
          </td>
          <td>
            <span
              className="sh_btn"
              onClick={() => {
                handleDelete(e.id, userId);
              }}
            >
              Delete
            </span>
          </td>
        </tr>
      )}
    </>
  );
};
export default Expense;
