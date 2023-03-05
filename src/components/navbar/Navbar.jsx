import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/blogging.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { logOut } from "../../helpers/firebase";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import ResponsiveNavbar from "../responsive/ResponsiveNavbar";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [responsive, setResponsive] = useState(false);

  const handleHamburger = function () {
    setResponsive(true);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" className="navbar-brand link-image" />
          </Link>
        </div>
        <span className="write" onClick={() => navigate("/write")}>
          Write
        </span>
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
              <span className="log-out" onClick={() => navigate("/login")}>
                Log In
              </span>
              <span
                className="log-out register-button"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </>
          )}
        </div>
        <div className="hamburger-button">
          <GiHamburgerMenu onClick={handleHamburger} />
        </div>
      </div>
      {responsive && (
        <ResponsiveNavbar
          currentUser={currentUser}
          logOut={logOut}
          setResponsive={setResponsive}
        />
      )}
    </nav>
  );
};

export default Navbar;
