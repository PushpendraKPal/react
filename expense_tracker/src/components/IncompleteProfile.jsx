import { useNavigate } from "react-router-dom";
import "../App.css";

const IncompleteProfile = () => {
  const navigate = useNavigate();
  const handleComplete = () => {
    navigate("/profileForm");
  };

  return (
    <div className="inProfile_container">
      <p>Welcome to Expense Tracker App!</p>
      <p>
        Your profile is 64% complete. A complete profile have chances to get
        free subscription and offers.
      </p>
      <button className="header_btn" onClick={handleComplete}>
        Complete Now !
      </button>
    </div>
  );
};

export default IncompleteProfile;
