import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../helpers/firebase";

import RegisterComponent from "../components/register/RegisterComponent";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName}`;
    createUser(email, password, navigate, displayName);
  };
  return (
    <>
      <RegisterComponent
        handleSubmit={handleSubmit}
        setFirstName={setFirstName}
        setEmail={setEmail}
        setPassword={setPassword}
        navigate={navigate}
      />
    </>
  );
};

export default Register;
