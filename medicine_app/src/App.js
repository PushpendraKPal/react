import "./App.css";
import AddMedicine from "./components/AddMedicine";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";
import ProductsDisplay from "./pages/ProductsDisplay";

function App() {
  return (
    <div className="App">
      <AddMedicine />
      <CartButton />
      <ProductsDisplay />
      <Cart />
    </div>
  );
}

export default App;
