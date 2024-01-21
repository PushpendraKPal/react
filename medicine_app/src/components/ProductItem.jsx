import { useState } from "react";
import { AppCxt } from "../store/AppContext";
import styles from "./ProductItem.module.css";

const ProductItem = ({ item }) => {
  const [val, setVal] = useState("");
  const { state, updateMedicine, addCart, updateCart } = AppCxt();

  const handleClick = (e) => {
    console.log(e._id);
    if (!val) {
      setVal(0);
    }
    let data = {
      name: e.name,
      description: e.description,
      price: e.price,
      quantity: e.quantity - val,
    };

    updateMedicine(e._id, data);

    addCart({
      name: e.name,
      description: e.description,
      price: e.price,
      quantity: val,
    });

    setVal("");
  };

  return (
    <div className={styles.container}>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div>{item.quantity}</div>
      <input
        type="number"
        placeholder="Order Quantity"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => handleClick(item)}>Add To Cart</button>
    </div>
  );
};

export default ProductItem;
