import { useState } from "react";
import { AuthCxt } from "../contaxt/authContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { addUser, addToken, token, user } = AuthCxt();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== "" && mail !== "") {
      if (login) {
        try {
          let response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0Q7-BgkEdY2M1RXH0W3uyrlRRqkrm5Gs",
            {
              method: "POST",
              body: JSON.stringify({
                email: mail,
                password,
                returnSecureToken: true,
              }),
            }
          );

          let data = await response.json();
          addToken(data.idToken);
          addUser(mail);
          //console.log(data);
          if (data.error) return alert(data.error.message);
          else {
            alert("You have successfully logged in!");
            navigate("/");
          }
        } catch (err) {
          //console.log(err);
        }
        //console.log("Login");
      } else {
        if (password === cnfPassword) {
          //console.log("Signup");
          try {
            let response = await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0Q7-BgkEdY2M1RXH0W3uyrlRRqkrm5Gs",
              {
                method: "POST",
                body: JSON.stringify({
                  email: mail,
                  password,
                  returnSecureToken: true,
                }),
              }
            );
            let data = await response.json();
            if (data.error) return alert(data.error.message);
            else {
              alert("You have successfully registred!");
            }
          } catch (err) {
            //console.log(err, "Hello");
          }
        } else {
          return alert("Password does not matches");
        }
        console.log("Signup");
      }
    } else {
      alert("Please Enter Email and Password");
    }
    setMail("");
    setPassword("");
    setCnfPassword("");

    //console.log(token);

    //console.log(user);
  };

  const handleLogin = () => {
    setLogin((pre) => !pre);
  };

  const handleForget = () => {
    navigate("/forget");
  };

  return (
    <div>
      <div>{login ? "Login" : "SignUp"}</div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <p>Email</p>
            <div>
              <div></div>
              <input
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Password</p>
            <div>
              <div></div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {login ? (
            <div>
              <button onClick={handleForget}>Forget Password?</button>
            </div>
          ) : (
            <div>
              <p> Confirm Password</p>
              <div>
                <div></div>
                <input
                  type="password"
                  value={cnfPassword}
                  onChange={(e) => setCnfPassword(e.target.value)}
                />
              </div>
            </div>
          )}
          <input type="submit" value={login ? "Login" : "SignUp"} />
        </form>
      </div>
      <button onClick={handleLogin}>
        {login
          ? "Dont have account, SignUp here."
          : "Already have an account, login here."}
      </button>
      <p>{user}</p>
    </div>
  );
};

export default Signup;
