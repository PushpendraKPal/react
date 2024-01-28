const AppReducer = (state, action) => {
  const { type, payload } = action;
  //console.log("Hello", type, payload);

  switch (type) {
    case "ADD_EXPENSE": {
      return { ...state, expense: [...state.expense, payload] };
    }
  }
};

export default AppReducer;
