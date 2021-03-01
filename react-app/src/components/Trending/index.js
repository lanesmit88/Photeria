import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingData } from "../../store/trending";
import Post from "../Post/Post";
import { useEffect } from "react";
function Trending() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const feed = useSelector((reduxState) => {
    return reduxState.trending;
  });

  useEffect(() => {
    dispatch(fetchTrendingData());
  }, []);
  console.log(feed);
  return (
    <>
      {feed.length > 0 ? (
        <div id="feedContainer">
          <div id="feed-inner-container">
            {feed.map((post) => {
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
            })}
          </div>
        </div>
      ) : (
        "no feed"
      )}
    </>
  );
}

export default Trending;
