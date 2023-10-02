import React, { useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const reducer = (state, action) => {
  if (action.type === "NEW_EMAIL") {
    return {
      ...state,
      email: action.val,
      isValidEmail: action.val.includes("@"),
      isValidForm: action.val.includes("@") && state.isValidPassword,
    };
  }
  if (action.type === "NEW_PASSWORD") {
    return {
      ...state,
      password: action.val,
      isValidPassword: action.val.trim().length > 6,
      isValidForm: state.isValidEmail && action.val.trim().length > 6,
    };
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
  const [state, dispatch] = useReducer(reducer, inetialState);

  const emailChangeHandler = (event) => {
    dispatch({ type: "NEW_EMAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "NEW_PASSWORD", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.email, state.password);
  };

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
