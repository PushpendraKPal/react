import { Button } from "react-bootstrap";
import "./App.css";
import AuthForm from "./pages/AuthForm";
import Welcome from "./pages/Welcome";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const token = useSelector((state) => state.auth.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Welcome /> : <AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
