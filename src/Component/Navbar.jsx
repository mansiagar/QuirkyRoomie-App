import { Link } from "react-router-dom";
import "./index.css";
//import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="nav_container">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/complaint">Complaints</Link>
      </nav>
    </div>
  );
};

export default Navbar;
