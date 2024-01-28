import { createContext, useContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const inetialState = {
    isLoading: false,
    expense: [],
    addExpense: (payload) => {
      return dispatch({
        type: "ADD_EXPENSE",
        payload,
      });
    },
  };
  const [state, dispatch] = useReducer(AppReducer, inetialState);

  console.log(state);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

export const AppCxt = () => {
  return useContext(AppContext);
};
