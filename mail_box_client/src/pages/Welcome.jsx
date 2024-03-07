import React from "react";
import { useSelector } from "react-redux";

function Welcome() {
  const token = useSelector((state) => state.auth.token);

  return <div>{`Welcome with user token ${token}`}</div>;
}

export default Welcome;
