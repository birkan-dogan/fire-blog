import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="dashboard">
        <div></div>
        <h3>Profile</h3>
        <div></div>
      </div>
      <div className="profile-information">
        <FaUserCircle className="profile-icon" />
        <h1>{currentUser.displayName.toUpperCase()}</h1>
        <p>{currentUser.email}</p>
      </div>
    </div>
  );
};

export default Profile;
