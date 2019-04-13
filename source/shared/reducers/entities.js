import { Map } from 'immutable';

// import account from '../store/account/account-reducer';

const entities = (state = Map(), action) => {
  return state.merge({
    // account: account(state.get('account'), action),
    account: {},
  });
};

export default entities;
