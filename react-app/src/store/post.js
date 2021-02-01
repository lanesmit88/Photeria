const POST_DATA = "posts/postData";

const postData = (post) => ({
  type: POST_DATA,
  post: post,
});

export const fetchPostData = (postId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/post/${postId}`);
    const resData = await res.json();
    dispatch(postData(resData));
  };
};

const initialState = [];

const CREATE_POST = "createPost";

const createPostAC = (data) => {
  return {
    type: CREATE_POST,
    data,
  };
};

export const createPost = (image, userCreating, caption, location) => async (
  dispatch
) => {
  const formData = new FormData();

  formData.append("image", image);
  formData.append("userCreating", userCreating);
  formData.append("caption", caption);
  formData.append("location", location);
  // console.log(formData);
  const returnRequest = await fetch("/dm/createPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image, userCreating, caption, location }),
  });
  return;
};
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
