import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="fire-blog" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
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
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
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
          <div className="link">Forgot Password ?</div>
          <input
            type="submit"
            className="btn form-control text-white"
            value="Login"
          />
        </form>
        <button className="btn text-white form-control">
          <AiOutlineGoogle
            style={{ marginRight: "1rem", transform: "scale(1.7)" }}
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
