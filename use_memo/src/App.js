import { useMemo, useState } from "react";
import "./App.css";
import ShowList from "./components/ShowList";
import Button from "./components/Button";

function App() {
  const [title, setTitle] = useState(true);
  const [dec, setDec] = useState(true);

  const handleClick = () => {
    setTitle((pre) => !pre);
    console.log(title);
  };

  const list = [5, 6, 4, 3, 1, 8, 2, 0];

  const item = dec ? list.sort((a, b) => a - b) : list.sort((a, b) => b - a);

  const handleDec = () => {
    setDec(true);
    console.log(dec);
  };

  const handleInc = () => {
    setDec(false);
    console.log(dec);
  };

  return (
    <div className="App">
      <h1>{`title`}</h1>
      <ShowList numbers={item}></ShowList>
      <Button handleClick={handleClick} btnTxt={"Change the title"}></Button>
      <Button handleClick={handleDec} btnTxt={`Decrement order`}></Button>
      <Button handleClick={handleInc} btnTxt={`Increment order`}></Button>
    </div>
  );
}

export default App;
