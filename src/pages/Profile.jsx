import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <h1 className="dashboard">──── Profile ────</h1>
      <div className="profile-information">
        <FaUserCircle className="profile-icon" />
        <h1>{currentUser.displayName.toUpperCase()}</h1>
        <p>{currentUser.email}</p>
      </div>
    </div>
  );
};

export default Profile;
