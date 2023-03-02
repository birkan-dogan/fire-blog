import "./login.css";
import img1 from "../../assets/login.svg";
import {
  AiOutlineGoogle,
  AiFillGithub,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineMail,
} from "react-icons/ai";

const LoginComponent = ({
  handleLogin,
  setEmail,
  setPassword,
  forgotPassword,
  navigate,
  handleProvider,
  handleGithub,
}) => {
  return (
    <div className="login">
      <div className="form-image">
        <img src={img1} alt="fire-blog" />
      </div>
      <div className="register-form">
        <h1 className="form-title">Login</h1>
        <form id="register" onSubmit={handleLogin}>
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
          <div className="password-account">
            <a className="link" onClick={forgotPassword}>
              Forgot Password ?
            </a>
            <a className="link" onClick={() => navigate("/register")}>
              Don't have an account?
            </a>
          </div>
          <div className="btn-container">
            <input type="submit" className="btn" value="Login" />
          </div>
        </form>
        <div className="google-github">
          <button className="btn-google" onClick={handleProvider}>
            <AiOutlineGoogle />
            Continue with Google
          </button>
          <button className="btn-github" onClick={handleGithub}>
            <AiFillGithub />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
