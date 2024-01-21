import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./AppReducer";

const inetialState = {
  medicines: [],
  cart: [],
};

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, inetialState);

  // Get all the medicines from medicines endpoint.

  const getMedicines = () => {
    fetch("https://crudcrud.com/api/ca7982a678b74a07a960bd51033d2d6b/medicines")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return dispatch({ type: "GET_MEDICINES", payload: data });
      });
  };

  // Add Medicine to medicines endpoint.

  const addMedicine = (payload) => {
    fetch(
      "https://crudcrud.com/api/ca7982a678b74a07a960bd51033d2d6b/medicines",
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return getMedicines();
      });
  };
  // Change made to one medicine from medicines endpoint.

  const updateMedicine = (id, payload) => {
    console.log(id);
    fetch(
      `https://crudcrud.com/api/ca7982a678b74a07a960bd51033d2d6b/medicines/${id}`,
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "PUT",
        body: JSON.stringify(payload),
      }
    ).then((response) => {
      console.log(response);
      return getMedicines();
    });
  };

  // Adding medicine to cart endpoint.

  const addCart = (payload) => {
    fetch("https://crudcrud.com/api/ca7982a678b74a07a960bd51033d2d6b/cart", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return getCart();
      });
  };

  // Get all the medicine from cart endpoint.

  const getCart = () => {
    fetch("https://crudcrud.com/api/ca7982a678b74a07a960bd51033d2d6b/cart")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return dispatch({ type: "GET_CART", payload: data });
      });
  };

  // Update Cart

  const updateCart = (id, payload) => {
    console.log(id);
    fetch(
      `https://crudcrud.com/api/ca7982a678b74a07a960bd51033d2d6b/cart/${id}`,
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "PUT",
        body: JSON.stringify(payload),
      }
    ).then((response) => {
      return console.log(response);
    });
  };

  useEffect(() => {
    getMedicines();
  }, []);
  return (
    <AppContext.Provider
      value={{
        state,
        addMedicine,
        updateMedicine,
        addCart,
        updateCart,
        getCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const AppCxt = () => {
  return useContext(AppContext);
};
