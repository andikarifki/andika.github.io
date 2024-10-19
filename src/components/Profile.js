import React from "react";
import "./css/Profile.css";
import profilePicture from "../assets/images/profile.jpg"; // Naik satu level ke src
import Icon from "./Icon";

function Profile() {
  return (
    <div className="profile">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <Icon />
    </div>
  );
}

export default Profile;
