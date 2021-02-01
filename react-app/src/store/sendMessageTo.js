const GET_FOLLOWERS_FOR_SEND_MESSAGE_TO = "recievesUsersFollowedOrFollowing";

const getFollowersAC = (data) => {
  return {
    type: GET_FOLLOWERS_FOR_SEND_MESSAGE_TO,
    data,
  };
};

export const getFollowers = (userId) => async (dispatch) => {
  const returnResponse = await fetch(`/dm/${userId}/message`);
  const response = await returnResponse.json();
  dispatch(getFollowersAC(response));
  return;
};
