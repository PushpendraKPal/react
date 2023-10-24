const productReducer = (state, action) => {
  const { type, payload } = action;

  console.log(payload, "Hello");

  let flag = false;
  state.cart.map((ele) => {
    if (payload.id === ele.id) flag = true;
  });

  switch (type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.products, payload],
      };
    }

    case "LQ": {
      return {
        ...state,
        products: state.products.map((ele) => {
          if (ele.id === payload.id && !flag) {
            if (ele.lq > 0) {
              state.cartCount += 1;
              return { ...ele, lq: ele.lq - 1 };
            } else {
              return { ...ele };
            }
          } else return { ...ele };
        }),
      };
    }

    case "MQ": {
      return {
        ...state,
        products: state.products.map((ele) => {
          if (ele.id === payload.id && !flag) {
            if (ele.mq > 0) {
              state.cartCount += 1;
              return { ...ele, mq: ele.mq - 1 };
            } else {
              return { ...ele };
            }
          } else return { ...ele };
        }),
      };
    }

    case "SQ": {
      return {
        ...state,
        products: state.products.map((ele) => {
          if (ele.id === payload.id && !flag) {
            if (ele.sq > 0) {
              state.cartCount += 1;
              return { ...ele, sq: ele.sq - 1 };
            } else {
              return { ...ele };
            }
          } else return { ...ele };
        }),
      };
    }

    case "CART_ADD": {
      //   let flag = false;
      //   state.cart.map((ele) => {
      //     if (payload.id === ele.id) flag = true;
      //   });
      if (flag) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload }],
        };
      }
    }
  }
};

export default productReducer;
