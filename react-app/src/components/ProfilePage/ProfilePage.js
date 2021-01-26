import React from "react";
// import ProfileDetail from './ProfileDetail'
import ProfileGrid from './ProfileGrid'
import './profileBase.css'
import { useState } from "react";

function ProfilePage() {
  return (
    <div className="profile-div">
      {/* <ProfileDetail /> */}
      <ProfileGrid />
    </div>
  );
}

export default ProfilePage