import { fromJS } from 'immutable';

import configClient from '../../config/config.client.json';

const configuration = fromJS(configClient);

export const sanitize = state => {
  delete state.location;
  delete state.routing;

  return Object.assign({}, state, {
    session: state.session.delete('cookies'),
    configuration,
  });
};
