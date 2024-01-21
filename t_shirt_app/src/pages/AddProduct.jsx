import { useState } from "react";
import style from "./addProduct.module.css";
import { AppCxt } from "../store/AppContext";

const AddProduct = () => {
  const { state, dispatch } = AppCxt();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [large, setLarge] = useState("");
  const [medium, setMedium] = useState("");
  const [small, setSmall] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let product = {
      name,
      company,
      description: des,
      price,
      large,
      medium,
      small,
    };
    addProductApi(product);
    setInetial();
  };

  const setInetial = () => {
    setName("");
    setCompany("");
    setDes("");
    setPrice("");
    setLarge("");
    setMedium("");
    setSmall("");
  };

  const addProductApi = (item) => {
    fetch(
      "https://crudcrud.com/api/82e5c187da7a449b8c655d816d50633a/products",
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify(item),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getProductsApi();
      });
  };

  const getProductsApi = () => {
    fetch("https://crudcrud.com/api/82e5c187da7a449b8c655d816d50633a/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return dispatch({ type: "ADD_PRODUCT", payload: data });
      });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form className={style.container} onSubmit={handleSubmit}>
        <div className={style.section}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.section}>
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className={style.section}>
          <label>Description:</label>
          <input
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div className={style.section}>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className={style.section}>
          <label>Size Large:</label>
          <input
            type="text"
            value={large}
            onChange={(e) => setLarge(e.target.value)}
          />
        </div>
        <div className={style.section}>
          <label>Size Medium:</label>
          <input
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          />
        </div>
        <div className={style.section}>
          <label>Size Small:</label>
          <input
            type="text"
            value={small}
            onChange={(e) => setSmall(e.target.value)}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
