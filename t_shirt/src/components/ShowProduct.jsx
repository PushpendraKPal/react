import { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import classes from "./Style.module.css";

const ShowProduct = () => {
  const { state, dispatch } = useProduct();

  const [large, setLarge] = useState(0);
  const [small, setSmall] = useState(0);
  const [medium, setMedium] = useState(0);

  const handleLClick = (id) => {
    dispatch({ type: "LQ", payload: { id } });
    setLarge((pre) => pre + 1);
  };
  const handleMClick = (id) => {
    dispatch({ type: "MQ", payload: { id } });
    setMedium((pre) => pre + 1);
  };
  const handleSClick = (id) => {
    dispatch({ type: "SQ", payload: { id } });
    setSmall((pre) => pre + 1);
  };
  const handleCartClick = (ele) => {
    dispatch({
      type: "CART_ADD",
      payload: { ...ele, lq: large, mq: medium, sq: small },
    });
  };

  useEffect(() => {
    console.log(state.cart);
  }, [state, state.cart]);

  return (
    <>
      {state.products.map((ele) => {
        return (
          <li key={ele.name} className={classes.form}>
            <div>{ele.name}</div>
            <div>{ele.des}</div>
            <div>{ele.price}</div>
            <button
              onClick={() => handleLClick(ele.id)}
            >{`Large ${ele.lq}`}</button>
            <button
              onClick={() => handleMClick(ele.id)}
            >{`Medium ${ele.mq}`}</button>
            <button
              onClick={() => handleSClick(ele.id)}
            >{`Small ${ele.sq}`}</button>
            <button onClick={() => handleCartClick(ele)}>Cart</button>
          </li>
        );
      })}
    </>
  );
};

export default ShowProduct;
