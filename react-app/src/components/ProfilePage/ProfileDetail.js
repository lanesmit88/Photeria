import React from "react";
import "./ProfileDetail.css";

function ProfileDetail() {
  return (
    <div className="mainDiv">
      <div className="imageDiv">
        <img src="" alt="" />
      </div>
      <div className="detailDiv">
        <div className="userNameDiv">
          <h4 className="userNameHeading">ghossstx</h4>
          <button className="editProfileButton">Edit Profile</button>
        </div>
        <div className="pffDiv">
          <p>
            18 <span>Posts</span>
          </p>
          <p>
            252 <span>Followers</span>
          </p>
          <p>
            238 <span>Following</span>
          </p>
        </div>
        <p className="nameHeading">Giiaga</p>
        <p className="bio">
          Bio goes there this isn't too bad Bio goes there this isn't too bad
          Bio goes there this isn't too bad Bio goes there this isn't too bad
        </p>
      </div>
    </div>
  );
}

export default ProfileDetail;
