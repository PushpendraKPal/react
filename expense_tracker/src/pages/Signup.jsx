import { useState } from "react";

const Signup = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [login, setLogin] = useState(false);

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
          console.log(data);
          if (data.error) return alert(data.error.message);
          else {
            alert("You have successfully logged in!");
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
  };

  return (
    <div>
      <div>SignUp</div>
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
          <div>
            <p>Password</p>
            <div>
              <div></div>
              <input
                type="password"
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
              />
            </div>
          </div>
          <input type="submit" value={login ? "Login" : "SignUp"} />
        </form>
      </div>
      <button>Already have an account, please login.</button>
    </div>
  );
};

export default Signup;
