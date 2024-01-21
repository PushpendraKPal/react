const appReducer = ({ type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT": {
      console.log("Added in Product", payload);
    }
    case "ADD_TO_CART": {
      console.log("Added to cart", payload);
    }
  }
};

export default appReducer;
