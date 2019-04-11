import entities from './entities';
import session from './session';
import routing from './routing';

export default (state = {}, action) => {
  return Object.assign({}, state, {
    entities: entities(state.entities, action),
    routing: routing(state.routing, action),
    session: session(state.session, action),
  });
};
