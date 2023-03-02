import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/login/LoginComponent";
import {
  resetPassword,
  signIn,
  signUpProvider,
  signUpWithGithub,
} from "../helpers/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };
  const handleProvider = () => {
    signUpProvider(navigate);
  };
  const handleGithub = () => {
    signUpWithGithub(navigate);
  };
  const forgotPassword = () => {
    resetPassword(email);
  };

  const data = {
    handleLogin,
    setEmail,
    setPassword,
    forgotPassword,
    navigate,
    handleProvider,
    handleGithub,
  };
  return (
    <>
      <LoginComponent {...data} />
    </>
  );
};

export default Login;
