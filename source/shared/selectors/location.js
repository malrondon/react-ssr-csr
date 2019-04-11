import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { parse } from 'query-string';

const routing = state => state.routing;

const result = routing => {
  const search = routing.getIn(['location', 'search']);
  const pathname = routing.getIn(['location', 'pathname']);
  const params = parse(search);
  const query = {};

  Object.keys(params).forEach(key => {
    let value = params[key];

    query[key] = value;
  });

  return fromJS({
    pathname,
    query,
  });
};

const makeLocationSelector = () => createSelector(routing, result);

export default makeLocationSelector;
