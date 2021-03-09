import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserFollowing } from "../../store/follows";
import { fetchPostData } from "../../store/post";

function FollowComponent({ postId, id, onCb }) {
  const dispatch = useDispatch();
  const isFollowing = useSelector((state) => state.following);
  const [checkFollow, setCheckFollow] = useState(isFollowing);
  const [testFollow, setTestFollow] = useState(false)

  useEffect(() => {
    dispatch(isUserFollowing(postId)).then((e) => {

      if (e[0].following.status) {
        onCb(true)
        setTestFollow(true)
      } else {
        onCb(false)
        setTestFollow(false)
      }
      dispatch(fetchPostData(id))});

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
      {!testFollow && <button onClick={followUser}>Follow</button>}
      {testFollow && (
        <button
          onClick={() => {
            unfollowUser();
          }}
          className='feed-button'
        >
          UnFollow
        </button>
      )}
    </div>
  );
}

export default FollowComponent;
