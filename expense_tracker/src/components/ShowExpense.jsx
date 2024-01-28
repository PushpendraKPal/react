import { useEffect, useState } from "react";
import { AppCxt } from "../contaxt/appContext/AppContext";

const ShowExpense = () => {
  const { state } = AppCxt();
  const [expense, setExpense] = useState([]);
  useEffect(() => {
    setExpense(state.expense);
  }, [state]);
  return (
    <div>
      {
        console.log(state)
        /* {expense.map((e) => {
        return (
          <div>
            {e.amount}, {e.description}, {e.category}
          </div>
        );
      })} */
      }
    </div>
  );
};
export default ShowExpense;
