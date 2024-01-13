import { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import classes from "./Style.module.css";
import Cart from "./Cart";

const ShowProduct = () => {
  const { state, dispatch } = useProduct();

  const handleOneClick = (id) => {
    dispatch({ type: "One", payload: { id } });
  };
  const handleTwoClick = (id) => {
    dispatch({ type: "Two", payload: { id } });
  };
  const handleThreeClick = (id) => {
    dispatch({ type: "Three", payload: { id } });
  };
  // const handleCartClick = (ele) => {
  //   dispatch({
  //     type: "CART_ADD",
  //     payload: { ...ele, lq: large, mq: medium, sq: small },
  //   });
  // };

  return (
    <>
      {state.products.map((ele) => {
        return (
          <li key={ele.name} className={classes.form}>
            <div>{ele.name}</div>
            <div>{ele.des}</div>
            <div>{ele.price}</div>
            <button onClick={(ele) => handleOneClick(ele.id)}>Buy One</button>
            <button onClick={(ele) => handleTwoClick(ele.id)}>Buy Two</button>
            <button onClick={(ele) => handleThreeClick(ele.id)}>
              buy Three
            </button>
          </li>
        );
      })}
    </>
  );
};

export default ShowProduct;
