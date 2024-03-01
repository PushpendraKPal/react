import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { CounterActions } from "../store/store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncrement = (amount) => {
    return dispatch(CounterActions.increment(5));
  };

  const handleDecrement = (amount) => {
    return dispatch(CounterActions.decrement(5));
  };

  return (
    <div className="container">
      <div>Counter</div>
      <br></br>
      <button onClick={() => handleIncrement(5)}>Increment By 5</button>
      <div className="counter">{counter}</div>
      <button onClick={() => handleDecrement(5)}>Decrement By 5</button>
    </div>
  );
};

export default Counter;
