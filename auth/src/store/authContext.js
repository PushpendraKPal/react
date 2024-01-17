import { createContext, useContext, useEffect, useState } from "react";

const inetialState = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(inetialState);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const loginHandler = (data) => {
    setUserLoggedIn(true);
    setUserId(data.localId);
    setToken(data.idToken);
  };
  const logoutHandler = () => {
    setUserLoggedIn(false);
    setUserId(null);
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    user: userId,
    login: loginHandler,
    logout: logoutHandler,
  };
  useEffect(() => {}, [token]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const AuthCxt = () => {
  return useContext(AuthContext);
};

export default AuthCxt;
