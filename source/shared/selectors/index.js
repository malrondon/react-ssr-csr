import { compose } from 'redux';

import makeLocationSelector from './location';

const location = makeLocationSelector();
const select = (key, selector, props) => state => Object.assign({}, state, { [key]: selector(state, props) });
const derived = state => compose(select('location', location))(state);

export { select, makeLocationSelector };

// Computed values
export default reducers => (state = {}, action) => {
  state = reducers(state, action);

  return derived(state);
};
