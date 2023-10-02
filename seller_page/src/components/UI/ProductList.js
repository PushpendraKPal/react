import { useEffect, useState } from "react";
import Input from "../Input/Input";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const eleProduct = products.filter((ele) => ele.category === "electronics");
  const foodProduct = products.filter((ele) => ele.category === "food");
  const hcProduct = products.filter((ele) => ele.category === "healthcare");

  const handleDelete = (id) => {
    const newProducts = products.filter((ele) => ele.id !== id);
    setProducts(() => [...newProducts]);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    return () => {};
  }, [products]);

  return (
    <div>
      {console.log(products)}
      <Input products={products} setProducts={setProducts}></Input>
      <h3>Electronic Products</h3>
      {eleProduct.map((ele) => (
        <Product ele={ele} handleDelete={handleDelete} key={ele.id}></Product>
      ))}
      <h3>Food Products</h3>
      {foodProduct.map((ele) => (
        <Product ele={ele} handleDelete={handleDelete} key={ele.id}></Product>
      ))}
      <h3>Healthcare Products</h3>
      {hcProduct.map((ele) => (
        <Product ele={ele} handleDelete={handleDelete} key={ele.id}></Product>
      ))}
    </div>
  );
};

export default ProductList;
