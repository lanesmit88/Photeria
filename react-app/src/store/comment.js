const GET_ALL_COMMENTS = "comments/all";

const NEW_COMMENT = "comments/new";

const CommentsData = (comments) => {
  return {
    type: GET_ALL_COMMENTS,
    comments: comments,
  };
};

const newComment = (comment) => {
  return {
    type: NEW_COMMENT,
    comment: comment,
  };
};

export const fetchCommentsData = (id) => async (dispatch) => {
  const res = await fetch(`/api/comment/${id}`);
  const resData = await res.json();

  dispatch(CommentsData(resData));
};

export const createComment = (id, data) => async (dispatch) => {
  const res = await fetch(`/api/comment/new/${id}`, {
    method: "post",
    body: JSON.stringify({ data }),
  });
  const addComment = res.data;
  dispatch(newComment(addComment));
};

const initialState = [];

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_COMMENTS:
      const newComments = [];
      action.comments.forEach((comment) => {
        if (newComments[comment.postId]) {
          newComments[comment.postId].push(comment);
        } else {
          newComments[comment.postId] = [comment];
        }
      });
      return { ...state, ...newComments };
    case NEW_COMMENT:
      newState = JSON.parse(JSON.stringify(state));
      if (newState[action.comment]) {
        newState[action.comment].push(action.comment);
        return newState;
      } else {
        newState[action.comment] = [action.comment];
        return newState;
      }

      return action.comments;
    default:
      return state;
  }
};

export default commentReducer;
