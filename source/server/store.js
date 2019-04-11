import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import configureStore from '../shared/configure-store';
import reducers from '../shared/reducers';
import configuration from '../../config/config.server.json';

export default initialState => {
  const state = Object.assign({}, { configuration }, initialState);
  const middlewares = [thunkMiddleware, promiseMiddleware()];

  return configureStore(state, middlewares, reducers);
};
