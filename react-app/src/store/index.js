import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from './user'
import commentReducer from './comment'
import followingReducer from './follows'

import postReducer from "./post"
import postLikesReducer from "./postLikes"
const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  post: postReducer,
  postLikes: postLikesReducer,
  following: followingReducer
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
