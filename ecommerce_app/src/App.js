import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import NavbarList from "./components/NavbarList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarList></NavbarList>
      <div className="header">The Generics</div>
      <div className="music">Music</div>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
