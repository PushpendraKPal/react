import { useState } from "react";
import Product from "../components/Product";
import { AppCxt } from "../store/AppContext";

const Products = () => {
  const { state, dispatch } = AppCxt();
  const [products, setProducts] = useState(state.productList);
  return (
    <div>
      <h2>Product List</h2>
      {products.map((ele) => {
        return <Product item={ele} key={ele.name} />;
      })}
    </div>
  );
};

export default Products;
