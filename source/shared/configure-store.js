import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';

import selectors from './selectors';

const immutify = obj => {
  const mutable = {};

  fromJS(obj).forEach((value, key) => (mutable[key] = value));

  return mutable;
};

export default (state = {}, middlewares = [], reducers = r => r, devTools = f => f) => {
  state = immutify(state);
  middlewares = compose(
    applyMiddleware(...middlewares),
    devTools
  );
  return createStore(selectors(reducers), state, middlewares);
};
