const POST_LIKES = "post/postLikes";

const postLikes = (postLikes) => ({
  type: POST_LIKES,
  postLikes: postLikes,
});

export const fetchPostLikes = (postId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/post/${postId}/likes`);
    const resData = await res.json();
    dispatch(postLikes(resData));
  };
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case POST_LIKES:
      newState = action.postLikes;
      return newState;
    default:
      return state;
  }
}

export default reducer;
