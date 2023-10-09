import React from "react";
import Item from "./Item";

const ShowList = ({ numbers }) => {
  console.log("ShowList");
  return (
    <div>
      {numbers.map((ele) => {
        return <Item number={ele} key={ele}></Item>;
      })}
    </div>
  );
};

export default React.memo(ShowList);
