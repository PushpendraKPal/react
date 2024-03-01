// Import redux

const redux = require("redux");

// Reducer Function

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment": {
      return { counter: state.counter + 5 };
    }

    case "decrement": {
      return { counter: state.counter - 5 };
    }

    case "INCREMENT_BY_2": {
      return { counter: state.counter + 2 };
    }

    case "DECREMENT_BY_2": {
      return { counter: state.counter - 2 };
    }

    default: {
      return state;
    }
  }
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

store.dispatch({ type: "INCREMENT_BY_2" });

store.dispatch({ type: "INCREMENT_BY_2" });

store.dispatch({ type: "DECREMENT_BY_2" });
