const NEW_COMMENT = "comments/new";
const GET_ALL_COMMENTS = "comments/all";

const newComment = (comment) => {
  return {
    type: NEW_COMMENT,
    comment,
  };
};

const listPostComments = (comments) => {
  return {
    type: GET_ALL_COMMENTS,
    comments,
  };
};

export const createComment = (id, data) => async (dispatch) => {
  const comment = await fetch(`/api/comment/new/${id}`, {
    method: "post",
    body: JSON.stringify({ data }),
  });
  dispatch(newComment(await comment.json()));
};

export const getPostComments = (postId) => async (dispatch) => {
  const comments = await fetch(`/api/post/${postId}/allcomments`);
  // console.log(await comments.json())
  dispatch(listPostComments(await comments.json()));
};

const initialState = [];

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_COMMENTS:
      newState = Object.assign({}, state);
      newState.postcomments = action.comments;
      return action.comments;

    case NEW_COMMENT:
      // console.log("0000000000000000000", state,"========================")
      newState = Object.assign({}, state);
      newState.comment = action.comment;
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
