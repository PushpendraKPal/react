import { useEffect } from "react";
import { getAllExpense } from "./crud";
import Expense from "./Expense";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseActions } from "../store/store";
import "../App.css";

const ShowExpense = () => {
  const exp = useSelector((state) => state.exp.expense);
  const userId = useSelector((state) => state.auth.userId);

  const dispatch = useDispatch();

  const total = exp.reduce((t, e) => {
    return t + +e.amount;
  }, 0);

  useEffect(() => {
    const fetchData = async (userId) => {
      console.log(userId);
      let data = await getAllExpense(userId);
      dispatch(ExpenseActions.addExpense(data));
    };
    console.log("ShowExp_effect");
    fetchData(userId);
  }, []);
  return (
    <div>
      <div className="quote premium">
        {`Rs ${total}/- is your total expense`}
        {total >= 10000 && (
          <button className="header_btn pr_btn">Go For Premium</button>
        )}
        {total >= 10000 && "to unlock useful features."}
      </div>
      <div className="shexp_container">
        <table>
          <tbody>
            <tr key={1}>
              <th>Amount</th>
              <th>Description</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {exp.map((e) => (
              <Expense e={e} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShowExpense;
