import React from "react";
import "./EditProfile.css";

function EditProfile() {
  return (
    <div className="editProfileMain">
      <form>
        <input placeholder="Username" />
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Save</button>
      </form>
      <button
        style={{ width: "220px" }}
        onClick={() => (window.location.href = "/element")}
      >
        Cancel
      </button>
    </div>
  );
}

export default EditProfile;
