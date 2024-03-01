import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { counter: state.counter + action.payload };
    }

    case "DECREMENT": {
      return { counter: state.counter - action.payload };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

export default store;
