import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import NavbarList from "./components/NavbarList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="App">
      {showCart && <Cart cart={setShowCart} />}
      <NavbarList cart={setShowCart}></NavbarList>
      <div className="header">The Generics</div>
      <div className="music">Music</div>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
