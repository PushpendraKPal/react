import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [validator, setValidator] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setValidator(false);
    } else {
      setValidator(true);
    }
    setEnteredValue(event.target.value);
  };
  //console.log(enteredValue);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
    setValidator(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button
        type="submit"
        style={{ backgroundColor: validator ? "#8b005d" : "#ec79c6" }}
      >
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
