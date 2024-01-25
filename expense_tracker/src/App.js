import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/SignupAndLogin";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { AuthCxt } from "./contaxt/authContext/AuthContext";
import { useEffect } from "react";
import Welcome from "./pages/Welcome";

function App() {
  const { user } = AuthCxt();

  useEffect(() => {
    console.log("User Change");
  }, [user]);
  return (
    <Routes>
      <Route path="/" element={!user ? <Welcome /> : <Signup />} />
    </Routes>
  );
}

export default App;
