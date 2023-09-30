import React from "react";

import "./Button.css";

const Button = (props) => {
  const { style } = props;
  return (
    <button
      type={props.type}
      className="button"
      onClick={props.onClick}
      style={style}
    >
      {props.children}
    </button>
  );
};

export default Button;
