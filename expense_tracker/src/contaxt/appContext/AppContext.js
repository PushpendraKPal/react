import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [exp, setExp] = useState([]);

  return (
    <AppContext.Provider value={{ exp, setExp }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const AppCxt = () => {
  return useContext(AppContext);
};
