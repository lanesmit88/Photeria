import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserFollowing } from "../../store/follows";

function FollowComponent({ setNewState, postId }) {
  const dispatch = useDispatch();
  const isFollowing = useSelector((state) => state.following);
  const [checkFollow, setCheckFollow] = useState(isFollowing);
  // const [newState, setNewState] = useState(false);

  // useEffect(()=>{
  //   console.log(checkFollow)
  // },[checkFollow])

  useEffect(() => {
    dispatch(isUserFollowing(postId)).then(() => setNewState(true));
  }, [checkFollow]);

  const followUser = async () => {
    const newFollow = await fetch(`/api/follow/new`, {
      method: "post",
      body: JSON.stringify({ userToFollow: postId }),
    });
    setCheckFollow(await newFollow.json());
  };
  const unfollowUser = async () => {
    const unFollow = await fetch(`/api/follow/unfollow`, {
      method: "post",
      body: JSON.stringify({ userToFollow: postId }),
    });
    setCheckFollow(await unFollow.json());
  };

  return (
    <div>
      {!isFollowing.status && <button onClick={followUser}>Follow</button>}
      {isFollowing.status && <button onClick={unfollowUser}>UnFollow</button>}
    </div>
  );
}

export default FollowComponent;
