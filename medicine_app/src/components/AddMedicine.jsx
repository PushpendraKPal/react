import { useState } from "react";
import { AppCxt } from "../store/AppContext";
import styles from "./addMedicine.module.css";

const AddMedicine = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const { addMedicine } = AppCxt();

  const submitHandler = (e) => {
    e.preventDefault();
    const medicine = { name, description: des, price, quantity: qty };
    addMedicine(medicine);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.container}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="des">Description</label>
          <input
            type="text"
            name="des"
            id="des"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            name="qty"
            id="qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default AddMedicine;

// Add Medicine to medicines EndPoint.

const addMedicine = (payload) => {
  fetch("https://crudcrud.com/api/ca7982a678b74a07a960bd51033d2d6b/medicines", {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
