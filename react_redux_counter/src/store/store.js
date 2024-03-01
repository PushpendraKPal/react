// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT": {
//       return { counter: state.counter + action.payload };
//     }

//     case "DECREMENT": {
//       return { counter: state.counter - action.payload };
//     }

//     default: {
//       return state;
//     }
//   }
// };

// const store = createStore(counterReducer);

//export default store;

//------------------------------------------------------

// Using Redux-ToolKit

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isAuthenticated: false };

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    isLogin(state) {
      state.isAuthenticated = true;
    },
  },
});

export const CounterActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
