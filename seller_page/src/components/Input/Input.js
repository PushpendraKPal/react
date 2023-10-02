import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Input.css";

const Input = ({ products, setProducts }) => {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (id && name && price && description && category) {
      const newProduct = { id, price, name, category, description };
      setProducts((prev) => [newProduct, ...products]);
      setCategory("");
      setDescription("");
      setName("");
      setPrice("");
    } else if (id && name && price && description) {
      return alert("Select category");
    } else return alert("Fill the all fields");
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label id="name">Name</label>
          <input
            id="name"
            value={name}
            type="text"
            onChange={handleName}
            className="input"
          ></input>
        </div>
        <div>
          <label id="price">Price</label>
          <input
            id="price"
            value={price}
            type="number"
            onChange={handlePrice}
            className="input"
          ></input>
        </div>
        <div>
          <label id="description">Description</label>
          <input
            id="description"
            value={description}
            type="text"
            onChange={handleDescription}
            className="input"
          ></input>
        </div>
        <div>
          <select id="category" value={category} onChange={handleCategory}>
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="healthcare">Healthcare</option>
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Input;
