const IS_FOLLOWING = "following/checkfollow";

const checkIfFollowing = (following) => {
  return {
    type: IS_FOLLOWING,
    following,
  };
};

export const isUserFollowing = (postId) => async (dispatch) => {
  const followingStatus = await fetch(`/api/follow/followstatus/${postId}`);
  dispatch(checkIfFollowing(await followingStatus.json()));
  // return
};

export const followUser = (postId) => async (dispatch) => {
  const newFollow = await fetch(`/api/follow/new`, {
    method: "post",
    body: JSON.stringify({ userToFollow: postId }),
  });
  dispatch(checkIfFollowing(await newFollow.json()));
};

export const unfollowUser = (postId) => async (dispatch) => {
  const unFollow = await fetch(`/api/follow/unfollow`, {
    method: "post",
    body: JSON.stringify({ userToFollow: postId }),
  });
  dispatch(checkIfFollowing(await unFollow.json()));
};

const initialState = [];

const followingReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case IS_FOLLOWING:
      return action.following;

    default:
      return state;
  }
};

export default followingReducer;
