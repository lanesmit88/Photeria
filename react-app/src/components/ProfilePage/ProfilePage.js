import React from "react";
import ProfileDetail from "./ProfileDetail";
import ProfileGrid from "./ProfileGrid";
import "./profileBase.css";
// import { useState } from "react";

function ProfilePage() {
  return (
    <div
      className="profile-div inDiv"
      style={{ width: "950px", marginLeft: "15%" }}
    >
      <ProfileDetail />
      <ProfileGrid />
    </div>
  );
}

export default ProfilePage;
