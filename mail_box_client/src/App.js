import "./App.css";
import AuthForm from "./pages/AuthForm";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <div className="d_none">Learn react</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Main /> : <AuthForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
