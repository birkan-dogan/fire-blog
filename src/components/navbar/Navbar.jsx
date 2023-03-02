import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/blogging.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { logOut } from "../../helpers/firebase";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" className="navbar-brand link-image" />
          </Link>
        </div>
        <div className="links">
          <Link to={`/?cat=art`} className="link">
            <h6>ART</h6>
          </Link>
          <Link to={`/?cat=science`} className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link to={`/?cat=technology`} className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to={`/?cat=design`} className="link">
            <h6>DESIGN</h6>
          </Link>
          <Link to={`/?cat=movies`} className="link">
            <h6>MOVIES</h6>
          </Link>
          <Link to={`/?cat=sports`} className="link">
            <h6>SPORTS</h6>
          </Link>
          {currentUser ? (
            <>
              <span
                onClick={() => navigate("/profile")}
                className="user-circle"
              >
                <FaUserCircle />
              </span>
              <span
                onClick={() => {
                  logOut();
                  navigate("/login");
                }}
                className="log-out"
              >
                Log Out
              </span>
              <span className="write" onClick={() => navigate("/write")}>
                Write
              </span>
            </>
          ) : (
            <>
              <span onClick={() => navigate("/login")}>Log In</span>
              <span onClick={() => navigate("/register")}>Register</span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
