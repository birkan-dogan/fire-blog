import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/blogging.png";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  // console.log(currentUser.providerData[0].uid);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link to={"/"}>
            <img src={img} alt="" style={{ width: "3.5rem" }} />
          </Link>
          <Link to={"/"} className="navbar-brand text-white">
            <div style={{ marginLeft: "10rem" }}>
              <div className="empty-div"></div>
              <h4 style={{ letterSpacing: ".5rem" }}>Fire-Blog</h4>
              <div className="empty-div"></div>
            </div>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0  text-capitalize">
                  {currentUser.displayName}
                </h5>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => logOut()}
                >
                  Log Out
                </button>
              </>
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
    </div>
  );
};

export default Navbar;
