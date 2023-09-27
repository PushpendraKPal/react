import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/expenseItem";

function App() {
  const data = [
    {
      date: "2023-09-27",
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
      date: "2023-09-19",
      name: "Utilities",
      amount: 100.0,
      location: "Utility Company",
    },
    {
      date: "2023-09-18",
      name: "Internet Bill",
      amount: 50.0,
      location: "Internet Provider",
    },
  ];

  return (
    <div className="App">
      <h2>Expense Items</h2>
      {data.map((ele) => {
        return (
          <ExpenseItem
            name={ele.name}
            date={ele.date}
            amount={ele.amount}
            location={ele.location}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
