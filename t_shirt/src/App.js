import "./App.css";
import ProductAdd from "./components/ProductAdd";
import ShowProduct from "./components/ShowProduct";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <ProductAdd />
        <ul>
          <ShowProduct />
        </ul>
      </ProductContextProvider>
    </div>
  );
}

export default App;
