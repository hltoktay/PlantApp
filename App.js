import App from "./app/index";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";

import reducers from "./app/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

const appRedux = () => (
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
);

export default appRedux;
