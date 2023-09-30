const UserCard = (props) => {
  const { username, age, college } = props;
  return (
    <li className="userItem">
      <div className="userName">{`${username} (age is ${age}) college:${college}`}</div>
    </li>
  );
};

export default UserCard;
