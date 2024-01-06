import "../App.css";
import { useState } from "react";

const Errors = ({ err, getMoviesHandler, setError }) => {
  const [counter, setCounter] = useState(5);
  const [retry, setRetry] = useState(true);
  if (retry) {
    setTimeout(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          setError(null);
          getMoviesHandler();
          return 5;
        }
        return prevCounter - 1;
      });
    }, 1000);
  }
  const onClickHandler = () => {
    setRetry(false);
    console.log("Hello...");
  };
  return (
    <div className="err">
      {retry ? (
        <h3>
          {err}{" "}
          <button onClick={onClickHandler}>
            <span className="counter">{counter}</span> Cancel
          </button>
        </h3>
      ) : (
        "You have cancelled Retrying"
      )}
    </div>
  );
};

export default Errors;
