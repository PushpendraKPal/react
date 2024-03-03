import { useSelector } from "react-redux";
import "../App.css";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

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
      console.log(data);
      if (data.error) return alert(data.error.message);
      else {
        alert(
          "We have send you the verification link on your registered email. Please click on that link to verify your email. after verification Please login again."
        );
        navigate("/");
        console.log(data);
      }
    } catch (err) {
      //console.log(err, "Hello");
    }
  };

  return (
    <div className="inProfile_container">
      <p className="verify">VERIFY YOUR EMAIL ADDRESS</p>
      <p>Welcome to Expense Tracker App!</p>
      <p>
        Please click the button belowto confirm the email address and activate
        your account.
      </p>
      <br />
      <button className="header_btn" onClick={handleVerifyMail}>
        CONFIRM EMAIL
      </button>
    </div>
  );
};

export default EmailVerification;
