import { useState, useRef } from "react";

const UserInput = (props) => {
  const { users, setUsers, setOverlay, setText } = props;

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const collegeName = useRef();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      setText("Enter valid username");
      setOverlay(true);
      return;
    }
    if (age <= 0) {
      setText("Enter valid age");
      setOverlay(true);
      return;
    }
    let coll = collegeName.current.value;
    if (coll.trim().length === 0) {
      setText("Enter valid college name");
      setOverlay(true);
      return;
    }
    setUsers([{ username, age, college: coll }, ...users]);
    setAge("");
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" onChange={handleUsername} value={username}></input>
        <label>Age:</label>
        <input type="number" onChange={handleAge} value={age}></input>
        <label>College:</label>
        <input type="text" ref={collegeName}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UserInput;
