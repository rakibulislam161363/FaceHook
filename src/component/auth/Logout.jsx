import Logeout from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
function Logout() {
  const {setAuth} = useAuth();
    const navigate = useNavigate();
    const handleLogout =()=>{
        navigate("/login");
        setAuth({});
    }
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={Logeout} alt="Logout" />
    </button>
  );
}

export default Logout;
