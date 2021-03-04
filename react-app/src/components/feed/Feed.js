import React from "react";
import { useState } from "react";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import { useEffect } from "react";
import { fetchAllUsers } from "../../store/allUsers";
import { Modal } from "../../context/Modal";
import CreatePost from "../CreatePost/CreatePost";

function Feed() {
  const dispatch = useDispatch();
  const [createPostModal, setCreatePostModal] = useState(false);
  const feedData = useSelector((reduxState) => {
    return reduxState.feed;
  });

  useEffect(() => {
    dispatch(fetchFeedData());
  }, []);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div>
        <div id="CreatePostButton">
          <div>
            <p onClick={() => { setCreatePostModal(true); }}>Make a Post</p>
            {createPostModal && (
                <Modal onClose={() => setCreatePostModal(false)}>
                  <div id="modal-div">
                    <CreatePost />
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
