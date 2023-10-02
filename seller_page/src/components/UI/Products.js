import { useState } from "react";
import Input from "../Input/Input";
import Electronics from "./electronics";
import Food from "./food";
import Healthcare from "./Healthcare";

const Products = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      {console.log(products)}
      <Input products={products} setProducts={setProducts}></Input>
      <Electronics products={products} setProducts={setProducts}></Electronics>
      <Food products={products} setProducts={setProducts}></Food>
      <Healthcare products={products} setProducts={setProducts}></Healthcare>
    </div>
  );
};

export default Products;
