import React from "react";
import { useState } from "react";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import { useEffect } from "react";
import { fetchAllUsers } from "../../store/allUsers";
import { fetchCreatePost } from "../../store/post";

import { Modal } from "../../context/Modal";
import ImageUpload from "../PhotoUploadComponent/photoUpload";
import CreatePost from "../CreatePost/CreatePost";

function Feed() {
  const dispatch = useDispatch();
  const [createPostModal, setCreatePostModal] = useState(false);
  let [photoData, setPhotoData] = useState("");
  let [caption, setCaption] = useState("");
  let [location, setLocation] = useState("");
  const feedData = useSelector((reduxState) => {
    return reduxState.feed;
  });

  useEffect(() => {
    dispatch(fetchFeedData());
  }, []);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  const submitHandeler = (e) => {
    e.preventDefault();
    dispatch(fetchCreatePost({ photoData, caption, location }));
    setCreatePostModal(false);
  };
  return (
    <div>
      <div id="CreatePostButton">
        <div>
          <p
            onClick={() => {
              setCreatePostModal(true);
            }}
          >
            Make a Post
          </p>
          {createPostModal && (
            <Modal onClose={() => setCreatePostModal(false)}>
              <div id="modal-div">
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
                    <ImageUpload
                      onNewImageBase64={(b64) => setPhotoData(b64)}
                    />
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
            </Modal>
          )}
        </div>
      </div>
      {feedData.length > 0
        ? feedData.map((post) => {
            return (
              <Post
                key={post.id}
                caption={post.caption}
                comment={post.comment}
                createdAt={post.createdAt}
                hashtags={post.hashtags}
                id={post.id}
                likes={post.likes}
                location={post.location}
                photoData={post.photoData}
                updatedAt={post.updatedAt}
                userId={post.userId}
              />
            );
          })
        : ""}
    </div>
  );
}

export default Feed;
