const FEED_DATA = "feed/feedData";

const feedData = (feed) => ({
  type: FEED_DATA,
  feed: feed,
});

export const fetchFeedData = () => {
  return async (dispatch) => {
    const res = await fetch(`/api/feed/`);
    const resData = await res.json();
    console.log('========================')
    console.log(resData)
    console.log('========================')
    dispatch(feedData(resData));
  };
};

const initialState = [];

function feedReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FEED_DATA:
      newState = action.feed;
      return newState;
    default:
      return state;
  }
}

export default feedReducer;
