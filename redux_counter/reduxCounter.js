// Import redux

const redux = require("redux");

// Reducer Function

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") return { counter: state.counter + 5 };
  if (action.type === "decrement") return { counter: state.counter - 5 };
  else return state;
};

// Create Store

const store = redux.legacy_createStore(counterReducer);

// Getting latest State

const counterSubscriber = () => {
  const lateststate = store.getState();
  console.log(lateststate);
};

// Subscribe - This executes when the state changes;

store.subscribe(counterSubscriber);

// Dispatch Action

store.dispatch({ type: "increment" });

store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
