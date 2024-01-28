import { useNavigate } from "react-router-dom";
import { AuthCxt } from "../contaxt/authContext/AuthContext";
import AddExpense from "../components/AddExpense";
import ShowExpense from "../components/ShowExpense";

const Welcome = () => {
  const navigate = useNavigate();
  const { token } = AuthCxt();

  const handleComplete = () => {
    navigate("/profileForm");
  };

  const handleVerifyMail = async () => {
    try {
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA0Q7-BgkEdY2M1RXH0W3uyrlRRqkrm5Gs",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token,
            returnSecureToken: true,
          }),
        }
      );
      let data = await response.json();
      if (data.error) return alert(data.error.message);
      else {
        //alert("You have successfully registred!");
        console.log(data);
      }
    } catch (err) {
      //console.log(err, "Hello");
    }
  };
  return (
    <div>
      Welcome to Expense Tracker App!
      <p>
        Your profile is incomplete!{" "}
        <button onClick={handleComplete}>complete now!</button>
      </p>
      <button onClick={handleVerifyMail}>Verify your email</button>
      <AddExpense />
      <ShowExpense />
    </div>
  );
};

export default Welcome;
