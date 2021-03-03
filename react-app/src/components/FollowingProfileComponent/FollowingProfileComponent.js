import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserFollowingProfile } from "../../store/follows";
import { fetchPostData } from "../../store/post";

function FollowingProfileComponent({ userId, onCb }) {
  const dispatch = useDispatch();
  const isFollowing = useSelector((state) => state.following);
  const [checkFollow, setCheckFollow] = useState(isFollowing);
  const [testFollow, setTestFollow] = useState(false)

  useEffect(() => {
    dispatch(isUserFollowingProfile(userId)).then((e) => {
    
      if (e[0].following.status) {
        // onCb(true)
        setTestFollow(true)
      } else {
        // onCb(false)
        setTestFollow(false)
      }
    //   dispatch(fetchPostData(userd))
    });
    
  }, [checkFollow]);

  const followUser = async () => {
      console.log(userId)
    const newFollow = await fetch(`/api/follow/followuser`, {
      method: "post",
      body: JSON.stringify({ userToFollow: userId }),
    });
    setCheckFollow(await newFollow.json());
    onCb()
  };

  const unfollowUser = async () => {
      
    const unFollow = await fetch(`/api/follow/unfollowuser`, {
      method: "post",
      body: JSON.stringify({ userToFollow: userId }),
    });
    setCheckFollow(await unFollow.json());
    onCb()
  };

  return (
    <div>
      {!testFollow && <button onClick={followUser}>Follow</button>}
      {testFollow && (
        <button
          onClick={() => {
            unfollowUser();
          }}
        >
          UnFollow
        </button>
      )}
    </div>
  );
}

export default FollowingProfileComponent;