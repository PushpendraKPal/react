import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ShowCart from "./components/ShowCart.Jsx";

function App() {
  const show = useSelector((state) => state.cart.show);
  return (
    <div className="App">
      <ShowCart />
      <Cart />
      <Store />
    </div>
  );
}

export default App;
