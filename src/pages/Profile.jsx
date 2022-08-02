import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile-div">
      <h1 className="dashboard">──── Profile ────</h1>
      <div className="profile">
        <FaUserCircle className="profile-icon" />
        <h1>{currentUser.displayName}</h1>
        <p>{currentUser.email}</p>
      </div>
    </div>
  );
};

export default Profile;
