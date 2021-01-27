
const NEW_COMMENT = 'comments/new';


const newComment = (comment) => {
  return {
    type: NEW_COMMENT,
    comment
  };
};


export const createComment = (id,data) => async dispatch => {
    console.log(data)
    const comment = await fetch(`/api/comment/new/${id}`,{method:'post',body: JSON.stringify({data})});
    dispatch(newComment(await comment.json()));
    return 'hello';
  };



const initialState = [];

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case NEW_COMMENT:
      newState = Object.assign({}, state);
      newState.comment = action.comment;
      return action.comment;
   
    default:
      return state;
  }
};

export default commentReducer;