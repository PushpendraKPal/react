import { useState } from "react";
import classes from "./ProfileForm.module.css";
import AuthCxt from "../../store/authContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProfileForm = () => {
  const [newPass, setNewPass] = useState("");
  const { login, token } = AuthCxt();
  const history = useHistory();

  const changePassHandler = async (e) => {
    e.preventDefault();
    if (newPass.length < 6)
      return alert("Password must have six or more characters");
    try {
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBmDxqC-JctIJwY7nM2lhOKLoLaMk7TjDw",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: token,
            password: newPass,
            returnSecureToken: true,
          }),
        }
      );
      let data = await response.json();
      console.log(data);
      if (data.error) alert(data.error.message);
      else alert("You have successfully changed the password!");
      login(data);
    } catch (err) {
      console.log(err);
    }
    setNewPass("");
    history.replace("/");
  };

  return (
    <form className={classes.form} onSubmit={changePassHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          onChange={(e) => setNewPass(e.target.value)}
          value={newPass}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
