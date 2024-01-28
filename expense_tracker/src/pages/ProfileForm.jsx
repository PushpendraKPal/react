import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCxt } from "../contaxt/authContext/AuthContext";

const ProfileForm = () => {
  const navigate = useNavigate();
  const { token, user } = AuthCxt();

  const [name, setName] = useState("");
  const [profileURL, setProfileURL] = useState("");

  const handleCancel = () => {
    navigate("/");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA0Q7-BgkEdY2M1RXH0W3uyrlRRqkrm5Gs",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
            name: name,
            photoUrl: profileURL,
            returnSecureToken: true,
          }),
        }
      );
      let data = await response.json();
      if (data.error) return alert(data.error.message);
      else {
        console.log(data);
        alert("You have successfully updated your profile!");
      }
    } catch (err) {
      //console.log(err, "Hello");
    }
  };
  return (
    <div>
      <div>
        <p>Winners never quite. Quiteers never wins</p>
        <p>
          Your profile is 64% completed. A complete Profile has higher chances
          of landing a job. Complete now
        </p>
      </div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <h2>Contact Details</h2>
        <button onClick={handleCancel}>Cancel</button>
        <div>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          Profile Photo URL
          <input
            type="text"
            value={profileURL}
            onChange={(e) => setProfileURL(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfileForm;
