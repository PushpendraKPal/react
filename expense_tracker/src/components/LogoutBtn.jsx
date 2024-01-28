import { useNavigate } from "react-router-dom";
import { AuthCxt } from "../contaxt/authContext/AuthContext";

const LogoutButton = () => {
  const { addToken, addUser } = AuthCxt();
  const navigate = useNavigate();

  const handleLogout = () => {
    addToken("");
    addUser("Login");
    navigate("/");
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
