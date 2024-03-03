import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store/store";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const displayName = useSelector((state) => state.auth.name);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!token) {
      navigate("/");
    } else dispatch(AuthActions.logout());
  };

  const handleProfile = () => {
    navigate("/profileForm");
  };

  return (
    <>
      <div className="header_container">
        <div>
          <p className="logo">ExpenseTracker</p>
        </div>
        <div className="header_name">
          <div
            className="user_name"
            onClick={handleProfile}
          >{`Hello ${displayName} !`}</div>
          <button className="header_btn" onClick={handleLogout}>
            {token ? "Logout" : "Login"}
          </button>
        </div>
      </div>
      <div className="quote">Winners never quite, Quiteers never wins.</div>
    </>
  );
};

export default Header;
