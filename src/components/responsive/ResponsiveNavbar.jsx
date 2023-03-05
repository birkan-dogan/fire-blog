import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./responsive.css";

const ResponsiveNavbar = ({ currentUser, logOut, setResponsive }) => {
  const navigate = useNavigate();

  return (
    <div className="responsive-menu">
      <AiOutlineClose
        className="close-button"
        onClick={() => setResponsive(false)}
      />
      <div className="responsive-links" onClick={() => setResponsive(false)}>
        <Link to={`/?cat=art`} className="responsive-link">
          <h6>ART</h6>
        </Link>
        <Link to={`/?cat=science`} className="responsive-link">
          <h6>SCIENCE</h6>
        </Link>
        <Link to={`/?cat=technology`} className="responsive-link">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link to={`/?cat=design`} className="responsive-link">
          <h6>DESIGN</h6>
        </Link>
        <Link to={`/?cat=movies`} className="responsive-link">
          <h6>MOVIES</h6>
        </Link>
        <Link to={`/?cat=sports`} className="responsive-link">
          <h6>SPORTS</h6>
        </Link>
        <div className="conditional-buttons">
          {currentUser ? (
            <>
              <span
                onClick={() => navigate("/profile")}
                className="responsive-user-circle"
              >
                <FaUserCircle />
              </span>
              <span
                onClick={() => {
                  logOut();
                  navigate("/login");
                }}
                className="responsive-log-out"
              >
                Log Out
              </span>
            </>
          ) : (
            <>
              <span
                className="responsive-log-out"
                onClick={() => navigate("/login")}
              >
                Log In
              </span>
              <span
                className="responsive-log-out responsive-register-button"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
