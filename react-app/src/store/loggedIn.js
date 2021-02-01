const LOGGED_IN = "user/loggedIn";

const logInlogOut = (logged) => ({
  type: LOGGED_IN,
  feed: logged,
});

export const loginUser = (loggedIn) => {
    return (dispatch) => {
        dispatch(logInlogOut(!loggedIn));
      };

};

const initialState = false;

function loginReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOGGED_IN:
      newState = action.feed;
      return newState;
    default:
      return state;
  }
}

export default loginReducer;