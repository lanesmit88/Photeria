import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserFollowing } from "../../store/follows";
import { fetchPostData } from "../../store/post";

function FollowComponent({ postId, id, onCb }) {
  const dispatch = useDispatch();
  const isFollowing = useSelector((state) => state.following);
  const [checkFollow, setCheckFollow] = useState(isFollowing);
  const [testFollow, setTestFollow] = useState(false)
  // const [newState, setNewState] = useState(false);

  // useEffect(()=>{
  //   console.log(checkFollow)
  // },[checkFollow])

  useEffect(() => {
    dispatch(isUserFollowing(postId)).then((e) => {
      console.log('====================================')
      console.log(e[0].following)
      console.log('====================================')
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
        >
          UnFollow
        </button>
      )}
    </div>
  );
}

export default FollowComponent;
