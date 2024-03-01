import logo from "./logo.svg";
import "./App.css";
import store from "./store/store";
import Counter from "./components/counter";
import Navigation from "./components/Navigation";
import BeforeLogin from "./components/BeforeLogin";
import AfterLogin from "./components/AfterLogin";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.isAuthenticated);
  return (
    <div className="App">
      <Navigation />
      {isAuth ? <AfterLogin /> : <BeforeLogin />}

      <Counter />
    </div>
  );
}

export default App;
