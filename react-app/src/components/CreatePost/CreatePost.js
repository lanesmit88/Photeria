import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/post";
import ImageUpload from "../PhotoUploadComponent/photoUpload";

function CreatePost(props) {
  const dispatch = useDispatch();
  let [image, setImage] = useState("");
  let [caption, setCaption] = useState("");
  let [location, setLocation] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    dispatch(createPost(image, caption, location));
  };

  return (
    <div>
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
        <ImageUpload onNewImageBase64={(b64) => setImage(b64)} />
        <textarea
          value={caption}
          placeholder="Create a caption"
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
