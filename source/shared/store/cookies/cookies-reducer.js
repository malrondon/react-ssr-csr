import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch (action.type) {
    case 'LOAD_COOKIES_SUCCESS':
      return state.merge(Map(action.payload));
    case 'SET_COOKIE':
      return state.set(action.payload.name, action.payload.value);
    case 'REMOVE_COOKIE':
      return state.delete(action.payload.name);
    case 'CLEAN_COOKIES':
      return state.delete();
    default:
      return state;
  }
};
