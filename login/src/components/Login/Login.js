import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const reducer = (state, action) => {
  if (action.type === "NEW_EMAIL") {
    return {
      ...state,
      email: action.val,
      isValidEmail: action.val.includes("@"),
    };
  }
  if (action.type === "NEW_PASSWORD") {
    return {
      ...state,
      password: action.val,
      isValidPassword: action.val.trim().length > 6,
    };
  }
  if (action.type === "FORM_VALIDATION") {
    return { ...state, isValidForm: action.val };
  }
  return { ...state };
};

const Login = (props) => {
  const inetialState = {
    email: "",
    isValidEmail: false,
    password: "",
    isValidPassword: false,
    isValidForm: false,
  };

  const ctx = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, inetialState);

  const emailChangeHandler = (event) => {
    dispatch({ type: "NEW_EMAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "NEW_PASSWORD", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.setIsLoggedIn((prev) => true);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch({
        type: "FORM_VALIDATION",
        val: state.isValidEmail && state.isValidPassword,
      });
    }, 200);

    return () => {
      clearTimeout(identifier);
    };
  }, [state.email, state.password]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            state.isValidEmail === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={emailChangeHandler}
            onBlur={() => state.isValidEmail}
          />
        </div>
        <div
          className={`${classes.control} ${
            state.isValidPassword === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={passwordChangeHandler}
            onBlur={() => state.isValidPassword}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!state.isValidForm}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
