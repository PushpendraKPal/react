import { useDispatch, useSelector } from "react-redux";
import "../App.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    return dispatch({ type: "INCREMENT_BY_5" });
  };

  const handleDecrement = () => {
    return dispatch({ type: "DECREMENT_BY_5" });
  };

  return (
    <div className="container">
      <div>Counter</div>
      <br></br>
      <button onClick={handleIncrement}>Increment By 5</button>
      <div className="counter">{counter}</div>
      <button onClick={handleDecrement}>Decrement By 5</button>
    </div>
  );
};

export default Counter;
