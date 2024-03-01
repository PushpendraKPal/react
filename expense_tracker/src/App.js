import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/SignupAndLogin";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { AuthCxt } from "./contaxt/authContext/AuthContext";
import { useEffect } from "react";
import Welcome from "./pages/Welcome";
import ProfileForm from "./pages/ProfileForm";
import LogoutButton from "./components/LogoutBtn";
import ForgetPassword from "./pages/ForgetPassword";
import ShowExpense from "./components/ShowExpense";

function App() {
  const { user } = AuthCxt();

  useEffect(() => {
    console.log("User Change");
  }, [user]);
  return (
    <>
      <LogoutButton />
      <Routes>
        <Route path="/" element={user !== "Login" ? <Welcome /> : <Signup />} />
        <Route path="/profileForm" element={<ProfileForm />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
