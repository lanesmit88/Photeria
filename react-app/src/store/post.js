const POST_DATA = "posts/postData";

const postData = (post) => ({
    type: POST_DATA,
    post: post
})

export const fetchPostData = (postId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/post/${postId}`);
        const resData = await res.json()
        dispatch(postData(resData))
    }
}

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case POST_DATA:
      newState = action.post;
      return newState;
    default:
      return state;
  }
}

export default reducer;
