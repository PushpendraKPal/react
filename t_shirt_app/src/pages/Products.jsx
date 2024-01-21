import { useEffect, useState } from "react";
import Product from "../components/Product";
import { AppCxt } from "../store/AppContext";

const Products = () => {
  const { state, dispatch } = AppCxt();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://crudcrud.com/api/82e5c187da7a449b8c655d816d50633a/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setProducts(data);
      });
  }, [state]);
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
