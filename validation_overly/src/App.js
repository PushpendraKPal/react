import React, { useState } from "react";
import UserList from "./components/UserList";
import Overly from "./components/Overlay";
import ReactDOM from "react-dom";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [text, setText] = useState("Hello");
  return (
    <div>
      {<UserList setOverlay={setOverlay} setText={setText}></UserList>}
      {overlay &&
        ReactDOM.createPortal(
          <Overly text={text} setOverlay={setOverlay}></Overly>,
          document.getElementById("root_overlay")
        )}
    </div>
  );
}

export default App;
