import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/blogging.png";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  // console.log(currentUser.providerData[0].uid);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex justify-content-around">
        <div>
          <Link to={"/"}>
            <img
              src={img}
              alt=""
              style={{ width: "4rem" }}
              className="navbar-brand link-image"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div>
          <Link to={"/"} className="navbar-brand">
            <div>
              <h4 style={{ letterSpacing: ".5rem" }} className="fire-blog">
                Fire-Blog
              </h4>
            </div>
          </Link>
        </div>
        <div>
          {currentUser ? (
            <div
              className="collapse navbar-collapse dropdown fw-bold text-dark"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <h1
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUserCircle
                      style={{ transform: "scale(2)", marginRight: "1rem" }}
                    />
                  </h1>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/profile"}>
                        {currentUser.displayName || "Profile"}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/newblog"}>
                        New Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/login"}
                        onClick={() => logOut()}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
