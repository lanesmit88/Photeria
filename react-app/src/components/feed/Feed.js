import React from "react";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import { useEffect } from "react";

function Feed() {
  const dispatch = useDispatch();
  const feedData = useSelector((reduxState) => {
    console.log(reduxState)
    return reduxState.feed;
  });

  useEffect(async () => {
    dispatch(fetchFeedData());
  }, []);
  


  return (
    <div>
      { feedData.map((post) => {
        return <Post caption={post.caption} comment={post.comment} createdAt={post.createdAt} hashtags={post.hashtags} id={post.id} likes={post.likes} location={post.location} photoData={post.photoData} updatedAt={post.updatedAt} userId={post.userId}/>
      })}
    </div>
  );
}

export default Feed;
