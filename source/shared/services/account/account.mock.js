import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_ACCOUNT } from '../../config';

const mock = new MockAdapter(axios);

mock.onGet(`${API_ACCOUNT}/?email=web%40app.com.br`).reply(200, {});

mock.onGet(`${API_ACCOUNT}/?email=blabla%40teste.com`).reply(404, {
  error: {
    raw_errors: '',
    description: 'Não há clientes com essas informações',
    code: 404,
  },
});
