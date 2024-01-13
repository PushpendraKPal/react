import { useContext } from "react";
import { createContext, useReducer } from "react";
import productReducer from "./ProductReducer";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
    counter: 0,
    cartCount: 0,
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;

export const useProduct = () => {
  return useContext(ProductContext);
};
