import "../App.css";
import { useState } from "react";

const Errors = ({ err, getMoviesHandler, setError }) => {
  const [counter, setCounter] = useState(5);

  setTimeout(() => {
    setCounter((prevCounter) => {
      if (prevCounter <= 0) {
        setError(null);
        getMoviesHandler();
        return 5;
      }
      return prevCounter - 1;
    });
  }, 1000);
  return (
    <div className="err">
      <h3>
        {err}{" "}
        <button>
          <span className="counter">{counter}</span> Cancel
        </button>
      </h3>
    </div>
  );
};

export default Errors;
