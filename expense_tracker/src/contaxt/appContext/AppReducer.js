import { addOneExpense, getAllExpense } from "../../crud";

const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_EXPENSE": {
      console.log("You are in reducer to add one");

      let data = addOneExpense(payload);

      return data.then((out) => {
        console.log("OUT");
        return { ...state, expense: out };
      });
    }
    case "GET_ALL_EXPENSE": {
      return { ...state, expense: payload };
    }
  }
};

export default AppReducer;
