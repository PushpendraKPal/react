import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("Login");
  const [token, setToken] = useState("");

  const addToken = (data) => {
    setToken(data);
  };

  const addUser = (data) => {
    setUser(data);
  };

  const value = { user, token, addUser, addToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const AuthCxt = () => {
  return useContext(AuthContext);
};
