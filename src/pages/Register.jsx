import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../helpers/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);
  };
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="fire-blog" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
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
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter Your Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
          <input
            type="submit"
            className="btn form-control text-white"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
