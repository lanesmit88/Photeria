const GET_ALL_MESSAGES = "allMEssagesForUserReturn";
const GET_S_USER_MESSAGES = "getspecificusermessages";
let SUBMIT_THE_FORM = "submitstheformTextfromUser";

const getAllMessagesAC = (messages) => {
  return {
    type: GET_ALL_MESSAGES,
    messages: messages,
  };
};
const getSpecificUserMessagesAC = (spmessages) => {
  return {
    type: GET_S_USER_MESSAGES,
    spmessages,
  };
};
let submitTheFormAC = (formValue) => {
  return {
    type: SUBMIT_THE_FORM,
    formValue,
  };
};
export const submitTheForm = (formValue, userId, sentToId) => async (
  dispatch
) => {
  let converUserId = Number(userId);

  let request = await fetch("/dm/submitTheForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValue, converUserId, sentToId }),
  });
  let convertJson = await request.json();
  dispatch(submitTheFormAC(convertJson));
  return;
};
export const getSpecificUserMessages = (userId, userClicked) => async (
  dispatch
) => {
  const fetchRequest = await fetch(`/dm/${userId}/${userClicked}/specificUser`);
  const convertJson = await fetchRequest.json();
  dispatch(getSpecificUserMessagesAC(convertJson));
  return;
};
export const getAllMessages = (userId) => async (dispatch) => {
  const fetchRequest = await fetch(`/dm/${userId}`);
  const convertJson = await fetchRequest.json();
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
    case GET_S_USER_MESSAGES:
      changedState = Object.assign({}, state);
      changedState.specificUserMessages = action.spmessages;
      return changedState;
    case SUBMIT_THE_FORM:
      changedState = Object.assign({}, state);
      changedState.specificUserMessages.sentMessages.unshift(action.formValue);
      return changedState;
    default:
      return state;
  }
};

export default messageReducer;
