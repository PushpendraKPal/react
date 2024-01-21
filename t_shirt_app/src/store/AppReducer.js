const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT": {
      return { ...state, productList: payload };
    }
    case "ADD_TO_CART": {
      console.log("Added to cart", payload);
    }
  }
};

export default appReducer;
