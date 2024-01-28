const AppReducer = (state, action) => {
  const { type, payload } = action;
  //console.log("Hello", type, payload);

  switch (type) {
    case "ADD_EXPENSE": {
      const data = async (payload, state) => {
        await AddExpense(payload);
        const out = await getAllExpenses();
        return { ...state, expense: out };
      };
      return data(payload, state);
    }
  }
};

export default AppReducer;

// Add Expense API

async function AddExpense(payload) {
  //console.log(payload);
  try {
    let response = await fetch(
      "https://expense-tracker-1bae2-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    let data = await response.json();
    //console.log(data);
    if (data.error) return alert(data.error.message);
    else {
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }

  console.log("Hiii");
}

// Get all expenses API

async function getAllExpenses() {
  console.log("Hello");
  try {
    let response = await fetch(
      "https://expense-tracker-1bae2-default-rtdb.firebaseio.com/expenses.json"
    );

    let data = await response.json();
    //console.log(data);
    if (data.error) return alert(data.error.message);
    else {
      let arr = [];
      for (let key in data) {
        arr.push(data[key]);
      }
      return arr;
    }
  } catch (err) {
    //console.log(err);
  }
}
