import { Map } from 'immutable';

import cookies from '../store/cookies/cookies-reducer';

const entities = (state = Map(), action) => {
  return state.merge({
    cookies: cookies(state.get('cookies'), action),
  });
};

export default entities;
