const UserCard = (props) => {
  const { username, age } = props;
  return (
    <li className="userItem">
      <div className="userName">{`${username} (age is ${age})`}</div>
    </li>
  );
};

export default UserCard;
