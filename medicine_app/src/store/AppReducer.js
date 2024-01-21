import { AppCxt } from "./AppContext";

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MEDICINES": {
      return { ...state, medicines: payload };
    }
    case "GET_CART": {
      return { ...state, cart: payload };
    }
  }
};

export default appReducer;
