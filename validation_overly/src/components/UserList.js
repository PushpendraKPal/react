import { useState } from "react";
import UserCard from "./UserCard";
import UserInput from "./UserInput";

const UserList = (props) => {
  const { setOverlay, setText } = props;

  const data = [
    { username: "John", age: 25, college: "XYZ University" },
    { username: "Emily", age: 30, college: "ABC College" },
    { username: "Michael", age: 22, college: "DEF University" },
    { username: "Sarah", age: 35, college: "GHI College" },
    { username: "David", age: 28, college: "JKL University" },
    { username: "Olivia", age: 19, college: "MNO College" },
    { username: "Jessica", age: 40, college: "PQR University" },
    { username: "Daniel", age: 31, college: "STU College" },
    { username: "Ashley", age: 26, college: "VWX University" },
    { username: "Ryan", age: 23, college: "YZA College" },
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
            return (
              <UserCard
                username={ele.username}
                age={ele.age}
                college={ele.college}
              ></UserCard>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
