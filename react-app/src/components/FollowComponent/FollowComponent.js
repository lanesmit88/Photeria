import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {isUserFollowing} from '../../store/follows'

function FollowComponent({postId}) {
  const dispatch = useDispatch()
  const isFollowing = useSelector((state) => state.following);
  const [checkFollow, setCheckFollow] = useState(isFollowing);
  
  useEffect(()=>{
    console.log(checkFollow)
  },[checkFollow])


  useEffect(() => {
    dispatch(isUserFollowing(postId));
  }, [checkFollow]);


  const handleSubmit = async (e) => {
      e.preventDefault()
      const newFollow = await fetch(`/api/follow/new`,{method:'post',body: JSON.stringify({"userToFollow":postId})});
      setCheckFollow(await newFollow.json())
      // isFollowing=newFollow
  }
  const handleUnfollow = async (e) => {
      e.preventDefault()
      const unFollow = await fetch(`/api/follow/unfollow`,{method:'post',body: JSON.stringify({"userToFollow":postId})});
      setCheckFollow(await unFollow.json())
      // isFollowing=unFollow
  }

  return (
    <div>
     {!isFollowing.status &&
      <form onSubmit={handleSubmit} action="" method="post">
          <button type='submit'>Follow</button>
      </form>
    }
      {isFollowing.status &&
      <form onSubmit={handleUnfollow} action="" method="post">
          <button type='submit'>UnFollow</button>
      </form>
    }

   
    </div>
  );
}

export default FollowComponent