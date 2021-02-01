import React from "react";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import { useEffect } from "react";
import { fetchAllUsers } from "../../store/allUsers";

function Feed() {
  const dispatch = useDispatch();
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
      {feedData.length>0 ? feedData.map((post) => {
        return <Post key={post.id} caption={post.caption} comment={post.comment} createdAt={post.createdAt} hashtags={post.hashtags} id={post.id} likes={post.likes} location={post.location} photoData={post.photoData} updatedAt={post.updatedAt} userId={post.userId}/>
      }):[]}
    </div>
  );
}

export default Feed;
