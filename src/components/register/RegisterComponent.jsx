import img2 from "../../assets/rocket.svg";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import "../register/register.css";

const RegisterComponent = ({
  handleSubmit,
  setFirstName,
  setEmail,
  setPassword,
  navigate,
}) => {
  return (
    <div className="register">
      <div className="form-image">
        <img src={img2} alt="fire-blog" />
      </div>
      <div className="register-form">
        <h1 className="form-title">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="firstName" className="form-label">
              <AiOutlineUser />
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter Your First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email" className="form-label">
              <AiOutlineMail />
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password" className="form-label">
              <AiOutlineLock />
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <input type="submit" className="btn" value="Register" />
          </div>
        </form>
        <div className="one-of-us">
          <h2 onClick={() => navigate("/login")}>Already have an account ?</h2>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
