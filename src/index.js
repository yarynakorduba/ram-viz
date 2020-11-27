import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RamVisualization from "./components/RamVisualization";
import * as serviceWorker from "./serviceWorker";
import injectTrackers from "./helpers/analyticsTrackers";

import "./commonStyles/index.scss";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <RamVisualization />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

injectTrackers();
