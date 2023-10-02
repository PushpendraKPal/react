import { useState } from "react";

const Input = ({ products, setProducts }) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

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
    if (id && name && price && description && category) {
      const newProduct = { id, price, name, category, description };
      setProducts((prev) => [newProduct, ...products]);
    } else if (id && name && price && description) {
      return alert("Select category");
    } else return alert("Fill the all fields");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="id">ID</label>
          <input id="id" value={id} type="text" onChange={handleId}></input>
        </div>
        <div>
          <label id="name">Name</label>
          <input
            id="name"
            value={name}
            type="text"
            onChange={handleName}
          ></input>
        </div>
        <div>
          <label id="price">Price</label>
          <input
            id="price"
            value={price}
            type="number"
            onChange={handlePrice}
          ></input>
        </div>
        <div>
          <label id="description">Description</label>
          <input
            id="description"
            value={description}
            type="text"
            onChange={handleDescription}
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
