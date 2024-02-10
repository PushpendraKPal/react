import { useEffect, useState } from "react";
import { AppCxt } from "../contaxt/appContext/AppContext";

const ShowExpense = () => {
  const { state } = AppCxt();
  console.log(state);
  useEffect(() => {
    console.log("Effect");
  }, [state]);
  return (
    <div>
      {
        console.log(state.expense) /* {state.expense.map((e) => {
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
