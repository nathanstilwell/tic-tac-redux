import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducers";

import "./styles.css";
import TicTacToe from "./containers/TicTacToe";

const store = createStore(reducer);

// ========================================

render(
  <Provider store={store}>
    <TicTacToe />
  </Provider>,
  document.getElementById("root")
);
