import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="header">
        <div>
          <h1>Logo</h1>
        </div>

        <div className="nav">
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
        </div>

        <div className="LsbuttonContainer">
            <button>Login</button>
            <button>Sign up</button>
        </div>
      </div>
    </>
  );
}
