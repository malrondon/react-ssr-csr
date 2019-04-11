import account from './index';
import './account.mock';

describe('Services', () => {
  describe('Account', () => {
    it('should have the response with status code 200', () => {
      const options = { type: 'email', id: 'web@app.com.br' };

      return account.getUserId(options).then(response => {
        expect(response.data).toEqual({});
      });
    });

    it('should have the response with status code 404', () => {
      const options = { type: 'email', id: 'blabla@teste.com' };

      return account.getUserId(options).catch(error => {
        expect(error.response.data).toEqual({
          error: {
            raw_errors: '',
            description: 'Não há clientes com essas informações',
            code: 404,
          },
        });
      });
    });
  });
});
