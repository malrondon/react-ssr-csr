import { cookies } from '../../modules';

const formatError = error => error.stack || error.message;

export const setCookie = (name, value, expires) => ({
  type: 'SET_COOKIE',
  payload: {
    name,
    value,
    expires,
  },
});

export const removeCookie = name => ({
  type: 'REMOVE_COOKIE',
  payload: {
    name,
  },
});

export const cleanCookies = name => ({
  type: 'CLEAN_COOKIES',
});

export const loadCookies = () => (dispatch, getState) => {
  dispatch(loadCookiesRequest());

  return cookies
    .getAll()
    .then(data => dispatch(loadCookiesSuccess(data)))
    .catch(err => dispatch(loadCookiesFailure(err)));
};

const loadCookiesRequest = () => ({
  type: 'LOAD_COOKIES_REQUEST',
});

const loadCookiesSuccess = payload => ({
  type: 'LOAD_COOKIES_REQUEST_SUCCESS',
  payload,
});

const loadCookiesFailure = err => ({
  type: 'LOAD_COOKIES_REQUEST_FAILURE',
  error: true,
  payload: formatError(err),
});
