import { createContext, useContext, useReducer } from "react";
import appReducer from "./AppReducer";

const clothingItems = [
  {
    name: "Polo T-shirt",
    company: "Peter England",
    description: "100% cotton",
    price: 1120,
    large: 120,
    medium: 20,
    small: 30,
  },
  {
    name: "Denim Jeans",
    company: "Levi's",
    description: "Classic fit",
    price: 2000,
    large: 50,
    medium: 80,
    small: 40,
  },
  {
    name: "Hoodie",
    company: "Nike",
    description: "Sportswear",
    price: 1500,
    large: 60,
    medium: 40,
    small: 20,
  },
  {
    name: "Formal Shirt",
    company: "Van Heusen",
    description: "Slim fit",
    price: 1200,
    large: 40,
    medium: 30,
    small: 15,
  },
  {
    name: "Casual Shorts",
    company: "Adidas",
    description: "Quick-dry material",
    price: 800,
    large: 30,
    medium: 25,
    small: 10,
  },
  {
    name: "Sneakers",
    company: "Puma",
    description: "Running shoes",
    price: 1800,
    large: 35,
    medium: 45,
    small: 18,
  },
  {
    name: "Summer Dress",
    company: "H&M",
    description: "Floral print",
    price: 1600,
    large: 25,
    medium: 15,
    small: 12,
  },
  {
    name: "Leather Jacket",
    company: "Zara",
    description: "Biker style",
    price: 2500,
    large: 15,
    medium: 10,
    small: 5,
  },
  {
    name: "Track Pants",
    company: "Under Armour",
    description: "Athletic wear",
    price: 1000,
    large: 55,
    medium: 35,
    small: 22,
  },
  {
    name: "Sunglasses",
    company: "Ray-Ban",
    description: "UV protection",
    price: 300,
    large: 80,
    medium: 50,
    small: 28,
  },
];

const AppContext = createContext();

const inetialState = {
  productList: clothingItems,
  cart: [],
};

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, inetialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const AppCxt = () => {
  return useContext(AppContext);
};
