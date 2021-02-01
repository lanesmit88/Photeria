import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserFollowing } from "../../store/follows";
import { unfollowUser } from "../../store/post";

// import { fetchPostData } from "../../store/post";

function FollowComponent({ setNewState, postId, id }) {
  const dispatch = useDispatch();
  const isFollowing = useSelector((state) => state.following);
  const [checkFollow, setCheckFollow] = useState(isFollowing);
  // const [newState, setNewState] = useState(false);

  // useEffect(()=>{
  //   console.log(checkFollow)
  // },[checkFollow])

  useEffect(() => {
    dispatch(isUserFollowing(postId));
  }, [checkFollow]);

  const followUser = async () => {
    const newFollow = await fetch(`/api/follow/new`, {
      method: "post",
      body: JSON.stringify({ userToFollow: postId }),
    });
    setCheckFollow(await newFollow.json());
  };
  const UnfollowUser = async (e, postId) => {
    e.preventDefault();

    dispatch(unfollowUser(postId));
    // setCheckFollow(false);
  };

  return (
    <div>
      {!isFollowing.status && <button onClick={followUser}>Follow</button>}
      {isFollowing.status && (
        <button
          onClick={(e) => {
            UnfollowUser(e, postId);
            setNewState(true);
          }}
        >
          UnFollow
        </button>
      )}
    </div>
  );
}

export default FollowComponent;
