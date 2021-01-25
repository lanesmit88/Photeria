import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store/storeLivesHere";
import { Provider } from "react-redux";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
