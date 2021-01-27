import React from "react";
import { useState, useEffect } from "react";
import './profileGrid.css'
import ProfileGridEntry from './ProfileGridEntry'

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
    <div className='profile-grid'>
      
       {  posts &&
           posts.map(post => {
            return <ProfileGridEntry imgSrc={post.photoData}/>
        })

    }
    </div>
  );
}

export default ProfileGrid;
