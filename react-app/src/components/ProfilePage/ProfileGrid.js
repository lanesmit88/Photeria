import React from "react";
import { useState, useEffect } from "react";
import "./profileGrid.css";
import ProfileGridEntry from "./ProfileGridEntry";

function ProfileGrid({posts}) {

  // const [posts,setPosts] = useState([])

  // useEffect(()=>{
  //    const asynfunc = async () => {
  //       const profile = await fetch('/api/users/profile/2')
  //       const resp = await profile.json()
  //       console.log(resp)
  //       setPosts(resp.posts)
  //     }
  //     asynfunc()
  // },[])  
  useEffect(()=>{
    console.log(posts)
  },[])
  return (
    <div className="profile-grid">
      {posts &&
        posts.map((post) => {
          console.log(post.likes.length)
          return <ProfileGridEntry key={post.id} imgSrc={post.photoData} numLikes={post.likes.length} numComments={post.comment.length} />;
        })}
    </div>
  );
}

export default ProfileGrid;
