import { useState } from "react";
import UserCard from "./UserCard";
import UserInput from "./UserInput";

const UserList = (props) => {
  const { setOverlay, setText } = props;
  const data = [
    { username: "John", age: 25 },
    { username: "Emily", age: 30 },
    { username: "Michael", age: 22 },
    { username: "Sarah", age: 35 },
    { username: "David", age: 28 },
    { username: "Olivia", age: 19 },
    { username: "Jessica", age: 40 },
    { username: "Daniel", age: 31 },
    { username: "Ashley", age: 26 },
    { username: "Ryan", age: 23 },
  ];

  const [users, setUsers] = useState(data);

  return (
    <div>
      <div className="form_container">
        <UserInput
          users={users}
          setUsers={setUsers}
          setOverlay={setOverlay}
          setText={setText}
        ></UserInput>
      </div>
      <div className="list_container">
        <ul className="name_container">
          {users.map((ele) => {
            return <UserCard username={ele.username} age={ele.age}></UserCard>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
