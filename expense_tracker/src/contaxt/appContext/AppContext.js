import { createContext, useContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [exp, setExp] = useState([]);
  const inetialState = {
    isLoading: false,
    expense: exp,
  };
  let setEx = (data) => {
    setExp(data);
  };

  const [state, dispatch] = useReducer(AppReducer, inetialState);

  //console.log(state);

  return (
    <AppContext.Provider value={{ state, dispatch, setEx }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const AppCxt = () => {
  return useContext(AppContext);
};
