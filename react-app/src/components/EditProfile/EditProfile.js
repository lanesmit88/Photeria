import React from "react";

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
    </div>
  );
}

export default EditProfile;
