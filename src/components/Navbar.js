import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to="/">
      <div className="navbar">
        <h1 className="title">
          Coin <span className="purple">Watch</span>
        </h1>
      </div>
    </Link>
  );
}

export default Navbar;
