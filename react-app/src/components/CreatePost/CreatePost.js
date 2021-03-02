import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCreatePost } from "../../store/post";
import ImageUpload from "../PhotoUploadComponent/photoUpload";

function CreatePost() {
  const dispatch = useDispatch();
  let [photoData, setPhotoData] = useState("");
  let [caption, setCaption] = useState("");
  let [location, setLocation] = useState("");
  let [tempi, setTempi] = useState(true);

  function submitHandeler(e) {
    e.preventDefault();
    dispatch(fetchCreatePost({ photoData, caption, location }));
    setTempi(true)
  }

  // <div id="CreatePostButton">
  //   <div>
  //     <p
  //       onClick={() => {
  //         setTempi(false);
  //       }}
  //     >
  //       Make a Post
  //     </p>

  //     <div hidden={tempi}>
  //       <CreatePost state={setTempi} />
  //     </div>
  //   </div>
  return (
    <div id="CreatePostButton">
      <div>
        <p
          onClick={() => {
            setTempi(!tempi);
          }}
        >
          Make a Post
        </p>
        <div hidden={tempi}>
          <form onSubmit={submitHandeler}>
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
      </div>
    </div>
  );
}

export default CreatePost;
