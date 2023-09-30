import React, { useState } from "react";
import UserList from "./components/UserList";
import Overly from "./components/Overlay";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [text, setText] = useState("Hello");
  return (
    <div>
      {<UserList setOverlay={setOverlay} setText={setText}></UserList>}
      {overlay && <Overly text={text} setOverlay={setOverlay}></Overly>}
    </div>
  );
}

export default App;
