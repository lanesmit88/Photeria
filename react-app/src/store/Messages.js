const GET_ALL_MESSAGES = "allMEssagesForUserReturn";

const getAllMessagesAC = (messages) => {
  return {
    type: GET_ALL_MESSAGES,
    messages: messages,
  };
};

export const getAllMessages = (userId) => async (dispatch) => {
  const fetchRequest = await fetch(`/dm/${userId}`);
  console.log("hey");
  const convertJson = await fetchRequest.json();
  // console.log(fetchRequest);
  // console.log("work");
  console.log(convertJson);
  dispatch(getAllMessagesAC(convertJson));
  return;
};

const messageReducer = (state = {}, action) => {
  let changedState;
  switch (action.type) {
    case GET_ALL_MESSAGES:
      changedState = Object.assign({}, state);
      changedState.allMessages = action.messages;
      return changedState;
    default:
      return state;
  }
};

export default messageReducer;
