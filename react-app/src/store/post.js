const POST_DATA = "posts/postData";
const DELETE_POST = "unfollowsUser";
const postData = (post) => ({
  type: POST_DATA,
  post: post,
});
const unfollowUserAC = (data) => {
  return { type: DELETE_POST, data };
};
export const unfollowUser = (postId) => async (dispatch) => {
  const unFollow = await fetch(`/api/follow/unfollow`, {
    method: "post",
    body: JSON.stringify({ userToFollow: postId }),
  });
  dispatch(unfollowUserAC(await unFollow.json()));
};
export const fetchPostData = (postId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/post/${postId}`);
    const resData = await res.json();
    dispatch(postData(resData));
  };
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case POST_DATA:
      newState = Object.assign({}, state);
      newState = action.post;
      return newState;
    case DELETE_POST:
      newState = Object.assign({}, state);
      delete newState[action.post];
      return newState;
    default:
      return state;
  }
}

export default reducer;
