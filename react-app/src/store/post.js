const POST_DATA = "posts/postData";

const CREATE_POST = "posts/createPost";

const postData = (post) => ({
  type: POST_DATA,
  post: post,
});

const CreatePost = (post) => {
  return {
    type: CREATE_POST,
    post: post,
  };
};

export const fetchPostData = (postId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/post/${postId}`);
    const resData = await res.json();
    dispatch(postData(resData));
  };
};

export const fetchCreatePost = (data) => {
  return async (dispatch) => {
    const res = await fetch(`/api/post/create`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const newPost = res.data;
    dispatch(CreatePost(newPost));
  };
};


const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case POST_DATA:
      newState = action.post;
      return newState;
    case CREATE_POST:
      newState = Object.assign({}, state);
      newState.post = action.post;
      return newState;
    default:
      return state;
  }
}

export default reducer;
