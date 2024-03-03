import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const show = useSelector((state) => state.cart.show);
  return (
    <div className="App">
      <Header />
      {show && <Cart />}
      <Store />
    </div>
  );
}

export default App;
