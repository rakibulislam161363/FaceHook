
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <h1>HomePage</h1>

      <Link to="/me">Profile page</Link>
    </div>
  );
}

export default HomePage;
