import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchCreatePost } from "../../store/post";
import ImageUpload from "../PhotoUploadComponent/photoUpload";

function CreatePost(props) {
  const dispatch = useDispatch();
  let [photoData, setPhotoData] = useState("");
  let [caption, setCaption] = useState("");
  let [location, setLocation] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    dispatch(fetchCreatePost({ photoData, caption, location }));
    Redirect("/")
  };

  return (
    <div className="create-post-modal-wrapper">
      <form
        // onSubmit={(e) => onSubmit(e, image, 6, caption, location)}
        onSubmit={submitHandeler}
      >
        <label for="img">Select image:</label>
        {/* <input
          //   value={image}
          type="file"
          name="img"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        /> */}
        <ImageUpload onNewImageBase64={(b64) => setPhotoData(b64)} />
        <textarea
          value={caption}
          placeholder="Create a caption"
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <input
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
