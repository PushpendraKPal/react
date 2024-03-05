import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome";
import Data from "./component/Data";

function App() {
  return (
    <div className="App">
      <Welcome />
      <p>Learn React</p>
      <Data />
    </div>
  );
}

export default App;
