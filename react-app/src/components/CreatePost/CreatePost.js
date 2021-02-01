<<<<<<< HEAD
import React from 'react';
import { useState } from "react";
import ImageUpload from '../PhotoUploadComponent/photoUpload';

function CreatePost(){
    const [imgurl, setImgUrl] = useState('');

    return(
        <div>
            <form action={''} method={'POST'}>
                <label for="img">Select image:</label>
                <ImageUpload onNewImageBase64={b64 => setImgUrl(b64)}/>
                <textarea placeholder='Create a caption'></textarea>
                <input placeholder='Location' />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
=======
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/post";
import ImageUpload from "../PhotoUploadComponent/photoUpload";

function CreatePost(props) {
  const dispatch = useDispatch();
  let [image, setImage] = useState();
  //   let [image, setImage] = useState();
  let [caption, setCaption] = useState();
  let [location, setLocation] = useState();
  //   let [photoName, setPhotoName] = useState();
  const onbSubmit = (e, image, userCreating, caption, location) => {
    e.preventDefault();
    dispatch(createPost(image, userCreating, caption, location));
    props.state(true);
  };
  //   console.log(image);
  //   console.log(iamge)
  return (
    <div>
      <form
        action={"/dm/createPost"}
        method={"POST"}
        onSubmit={(e) => onbSubmit(e, image, 6, caption, location)}
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
>>>>>>> feb696207001291b29d437b1a98cbf307336b091
}

export default CreatePost;
