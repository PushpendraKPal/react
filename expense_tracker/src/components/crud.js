const url = "https://expense-5b1cf-default-rtdb.firebaseio.com/expense.json";

// Get all expenses

export async function getAllExpense() {
  try {
    let response = await fetch(url);

    let data = await response.json();

    //if (data.error) return alert(data.error.message);
    //else {
    let arr = [];
    for (let key in data) {
      data[key].id = key;
      arr.push(data[key]);
    }
    console.log(data);
    return arr;
    //}
  } catch (err) {
    console.log(err);
  }
}

// Add Expense

export async function addExpense(payload) {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    let data = await response.json();

    if (data.error) return alert(data.error.message);
    else {
      return getAllExpense();
    }
  } catch (err) {
    console.log(err);
  }
}

// Delete Expense

export async function deleteExpense(id) {
  console.log(id);
  try {
    let response = await fetch(
      `https://expense-5b1cf-default-rtdb.firebaseio.com/expense/${id}.json`,
      {
        method: "DELETE",
      }
    );

    let data = await response.json();

    if (data.error) return alert(data.error.message);
    else {
      return getAllExpense();
    }
  } catch (err) {
    console.log(err);
  }
}

// Edit Expense

export async function editExpense(payload) {
  try {
    let response = await fetch(
      `https://expense-5b1cf-default-rtdb.firebaseio.com/expense/${payload.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
      }
    );

    let data = await response.json();

    if (data.error) return alert(data.error.message);
    else {
      return getAllExpense();
    }
  } catch (err) {
    console.log(err);
  }
}
