import { cookies } from '../modules';

export default store => next => action => {
  const { type, payload } = action;
  // const { configuration } = store.getState();
  // const { PUBLIC_URL } = process.env;

  if (type === 'SET_COOKIE') {
    if (!payload.expires) {
      const now = new Date();
      let time = now.getTime();
      time += 3600 * 24000;
      now.setTime(time);
      payload.expires = now.toUTCString();
    }
    return cookies
      .set(payload.name, payload.value, {
        domain: '',
        path: '/',
        expires: payload.expires,
      })
      .then(() => next(action));
  }

  if (type === 'REMOVE_COOKIE') {
    cookies.remove(payload.name);
  }

  if (type === 'CLEAN_COOKIES') {
    cookies.clearAll();
  }

  return next(action);
};
