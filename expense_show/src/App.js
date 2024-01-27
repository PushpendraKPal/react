import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/expenseItem";

const App = () => {
  return (
    <div className="App">
      <h2>Expense Items</h2>
      <ExpenseItem />
    </div>
  );
};

export default App;
