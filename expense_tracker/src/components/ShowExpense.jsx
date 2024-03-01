import { useEffect, useState } from "react";
import { AppCxt } from "../contaxt/appContext/AppContext";
import { getAllExpense, deleteExpense } from "./crud";
import EditExpense from "./EditExpense";
import Expense from "./Expense";

const ShowExpense = () => {
  const { exp, setExp } = AppCxt();

  const handleDelete = async (id) => {
    await deleteExpense(id);
    let data = await getAllExpense();
    setExp(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllExpense();
      setExp(data);
    };

    fetchData();
  }, []);
  return (
    <table>
      <tbody>
        <tr key={1}>
          <th>Amount</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
        {exp.map((e) => (
          <Expense e={e} key={e.id} />
        ))}
      </tbody>
    </table>
  );
};
export default ShowExpense;
