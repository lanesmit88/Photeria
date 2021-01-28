import React from 'react';
import ImageUploading from 'react-images-uploading';
 
function FollowComponent({userId}) {

  const handleSubmit = async (e) => {
      e.preventDefault()
    //   const newFollow = await fetch(`/api/follow/new`,{method:'post',body: JSON.stringify({userId})});
      const newFollow = await fetch(`/api/follow/new`,{method:'post',body: JSON.stringify({"userToFollow":6})});
  }
  const handleUnfollow = async (e) => {
      e.preventDefault()
    //   const newFollow = await fetch(`/api/follow/new`,{method:'post',body: JSON.stringify({userId})});
      const newFollow = await fetch(`/api/follow/unfollow`,{method:'post',body: JSON.stringify({"userToFollow":6})});
  }

  return (
    <div>
     
      <form onSubmit={handleSubmit} action="" method="post">
          <button type='submit'>Follow</button>
      </form>

      <form onSubmit={handleUnfollow} action="" method="post">
          <button type='submit'>UnFollow</button>
      </form>

   
    </div>
  );
}

export default FollowComponent