
const GET_USER_PROFILE = 'users/profile';


const getProfile = (profile) => {
  return {
    type: GET_USER_PROFILE,
    profile
  };
};


export const getUserProfile = (id) => async dispatch => {
    const profile = await fetch(`/api/users/profile/${id}`);
    dispatch(getProfile(await profile.json()));
    return 'hello';
  };



const initialState = [];

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_USER_PROFILE:
      newState = Object.assign({}, state);
      newState.profile = action.profile;
      return action.profile;
   
    default:
      return state;
  }
};

export default userReducer;