import "./expenseItem.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseRow from "./ExpenseRow";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = () => {
  const expense = [
    {
      date: "2024-09-27",
      name: "Groceries",
      amount: 50.0,
      location: "Local Supermarket",
    },
    {
      date: "2023-09-26",
      name: "Dinner",
      amount: 30.0,
      location: "Restaurant XYZ",
    },
    {
      date: "2023-09-25",
      name: "Gasoline",
      amount: 40.0,
      location: "Gas Station ABC",
    },
    {
      date: "2023-09-24",
      name: "Movie Tickets",
      amount: 25.0,
      location: "Cinema City",
    },
    {
      date: "2023-09-23",
      name: "Electronics",
      amount: 300.0,
      location: "Tech Store",
    },
    {
      date: "2023-09-22",
      name: "Lunch",
      amount: 15.0,
      location: "Cafeteria",
    },
    {
      date: "2023-09-21",
      name: "Home Rent",
      amount: 1200.0,
      location: "Landlord",
    },
    {
      date: "2023-09-20",
      name: "Clothing",
      amount: 75.0,
      location: "Fashion Store",
    },
    {
      date: "2022-09-19",
      name: "Utilities",
      amount: 100.0,
      location: "Utility Company",
    },
    {
      date: "2022-09-18",
      name: "Internet Bill",
      amount: 50.0,
      location: "Internet Provider",
    },
  ];

  const [data, setData] = useState([...expense]);
  const [filterVal, setFilVal] = useState("All");
  const [formVal, setFormVal] = useState(false);

  let filteredData = data.filter((e) => {
    if (filterVal === "All") return true;
    else {
      return e.date.includes(filterVal);
    }
  });

  let textOnFilter = "";

  if (filteredData.length === 0)
    textOnFilter = <p>There is no expense in this year</p>;
  else if (filteredData.length === 1)
    textOnFilter = <p>Only single Expense here. Please add more...</p>;
  else {
    textOnFilter = (
      <ul>
        {filteredData.map((ele) => {
          return (
            <ExpenseRow
              name={ele.name}
              date={ele.date}
              amount={ele.amount}
              location={ele.location}
              key={ele.name}
            ></ExpenseRow>
          );
        })}
      </ul>
    );
  }

  const handleForm = () => {
    setFormVal((prev) => !prev);
  };

  return (
    <>
      {formVal ? (
        <ExpenseForm
          data={data}
          setData={setData}
          handleForm={handleForm}
        ></ExpenseForm>
      ) : (
        <button onClick={handleForm}>Add Expense</button>
      )}
      <ExpenseFilter
        setFilVal={setFilVal}
        filterVal={filterVal}
      ></ExpenseFilter>
      {textOnFilter}
    </>
  );
};

export default ExpenseItem;
