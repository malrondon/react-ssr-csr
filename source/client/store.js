import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import configureStore from '../shared/configure-store';
import cookiesMiddleware from '../shared/middlewares/cookies';
import history from '../shared/history';
import reducers from '../shared/reducers';

export default initialState => {
  const state = Object.assign({}, window.__PRELOADED_STATE__, initialState);
  const middlewares = [
    thunkMiddleware,
    cookiesMiddleware,
    routerMiddleware(history),
    promiseMiddleware(),
    logger,
  ];
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

  return configureStore(state, middlewares, reducers, devTools);
};
