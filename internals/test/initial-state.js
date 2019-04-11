import { Map, List } from 'immutable';

const initialState = Map({
  entities: Map({
    areas: Map({
      currentArea: Map(),
      list: List(),
      lat: null,
      long: null,
    }),
    autocomplete: Map({
      list: List(),
    }),
    filters: Map({
      list: List(),
      selected: Map({}),
      chosen: Map({}),
    }),
    restaurants: Map({
      list: List(),
      _params: Map({
        current_page: 1,
        per_page: 12,
        page: 1,
      }),
      total: 0,
    }),
  }),
});

export default initialState;
