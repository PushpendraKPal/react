import { useState } from "react";

const productReducer = (state, action) => {
  const { type, payload } = action;

  const newCart = state.cart.filter((ele) => {
    return payload.id === ele.id;
  });

  switch (type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.products, payload],
      };
    }

    case "One": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case "Two": {
      return {
        ...state,
        counter: state.counter + 2,
      };
    }

    case "Three": {
      return {
        ...state,
        counter: state.counter + 3,
      };
    }

    case "CART_ADD": {
      //   let flag = false;
      //   state.cart.map((ele) => {
      //     if (payload.id === ele.id) flag = true;
      //   });
      // if (flag) {
      //   return state;
      // } else {
      //   return {
      //     ...state,
      //     cart: [...state.cart, { ...payload }],
      //   };
      // }
    }
  }
};

export default productReducer;
