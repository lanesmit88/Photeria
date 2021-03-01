import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user";
import commentReducer from "./comment";
import feedReducer from "./feed";
import allUsersReducer from "./allUsers";
import followingReducer from "./follows";
import trendingReducer from "./trending";
import postReducer from "./post";
import postLikesReducer from "./postLikes";
import messageReducer from "./Messages";

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  post: postReducer,
  postLikes: postLikesReducer,
  feed: feedReducer,
  allUsers: allUsersReducer,
  following: followingReducer,
  messages: messageReducer,
  trending: trendingReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
