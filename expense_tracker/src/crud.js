// Add Expense API

export async function addOneExpense(payload) {
  try {
    let response = await fetch(
      "https://expense-tracker-1bae2-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    let data = await response.json();

    if (data.error) return alert(data.error.message);
    else {
      //console.log(data);
      return getAllExpense();
    }
  } catch (err) {
    console.log(err);
  }

  console.log("Hiii");
}

// Get All Expenses

export async function getAllExpense(payload) {
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
        data[key].id = key;
        arr.push(data[key]);
      }
      //console.log(arr);
      return arr;
    }
  } catch (err) {
    console.log(err);
  }

  console.log("Hiii");
}
