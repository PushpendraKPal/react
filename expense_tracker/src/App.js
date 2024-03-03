import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileForm from "./pages/ProfileForm";
import ForgetPassword from "./pages/ForgetPassword";
import store from "./store/store";
import { useSelector } from "react-redux";
import SignupAndLogin from "./pages/SignupAndLogin";
import Header from "./components/Header";
import IncompleteProfile from "./components/IncompleteProfile";
import AddOneExpense from "./components/AddOneExpense";
import ShowExpense from "./components/ShowExpense";
import EmailVerification from "./components/EmailVerification";

function App() {
  const token = useSelector((state) => state.auth.token);
  const name = useSelector((state) => state.auth.name);

  return (
    <>
      {console.log(store.getState())}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              name ? (
                <AddOneExpense />
              ) : (
                <IncompleteProfile />
              )
            ) : (
              <SignupAndLogin />
            )
          }
        />
        <Route path="/profileForm" element={<ProfileForm />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
      {token && <ShowExpense />}
      <EmailVerification />
    </>
  );
}

export default App;
