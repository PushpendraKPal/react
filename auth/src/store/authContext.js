import { createContext, useContext, useState } from "react";

const inetialState = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(inetialState);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const userLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const AuthCxt = () => {
  return useContext(AuthContext);
};

export default AuthCxt;
