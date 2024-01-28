import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/profileForm");
  };
  return (
    <div>
      Welcome to Expense Tracker App!
      <p>
        Your profile is incomplete!{" "}
        <button onClick={handleComplete}>complete now!</button>
      </p>
    </div>
  );
};

export default Welcome;
