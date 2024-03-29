import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";
import AuthCxt from "../../store/authContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setISLoding] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = AuthCxt();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    setISLoding(true);
    e.preventDefault();
    if (!email || !password) return alert("Fill the all fields");
    if (password.length < 6)
      return alert("Password must have six or more characters");
    if (isLogin) {
      try {
        let response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBmDxqC-JctIJwY7nM2lhOKLoLaMk7TjDw",
          {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
          }
        );
        setISLoding(false);
        let data = await response.json();
        console.log(data);
        if (data.error) return alert(data.error.message);
        else alert("You have successfully logged in!");
        login(data);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmDxqC-JctIJwY7nM2lhOKLoLaMk7TjDw",
          {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
          }
        );
        setISLoding(false);
        let data = await response.json();

        if (data.error) alert(data.error.message);
        else alert("You have successfully registred!");
      } catch (err) {
        console.log(err, "Hello");
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          {!isLoading ? (
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
