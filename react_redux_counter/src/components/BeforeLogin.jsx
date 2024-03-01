import { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { CounterActions } from "../store/store";

const BeforeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(CounterActions.isLogin());
  };

  return (
    <div className="bflogin">
      <div>Email</div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <div>Password</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default BeforeLogin;
