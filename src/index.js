// src/index.js

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { TodoProvider } from "./TodoContext";

ReactDOM.render(
  <Provider store={store}>
    <TodoProvider>
      <App />
    </TodoProvider>
  </Provider>,
  document.getElementById("root")
);
