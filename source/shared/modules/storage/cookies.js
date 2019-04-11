const stringify = val => (typeof val === 'string' ? val : JSON.stringify(val));

const stringifyOptions = opts =>
  Object.keys(opts)
    .filter(key => /^(?:expires|path|domain|secure)$/i.test(key))
    .reduce((memo, key) => `${memo}; ${key}=${opts[key]}`, '');

const isPlainObject = obj => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  let proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
};

/* setters */
export const set = (key, val, opts = {}) => {
  const cookies = isPlainObject(key) ? key : { [key]: val };
  opts = stringifyOptions(opts);

  Object.keys(cookies).forEach(key => {
    document.cookie = `${key}=${stringify(cookies[key])}; ${opts}`;
  });

  return Promise.resolve();
};

/* getters */
export const get = key => {
  const match = document.cookie.match(new RegExp(`(${key})=(.*?)(;|$)`));

  return Promise.resolve(match ? match[2] : undefined);
};

export const getAll = () => {
  const cookies = {};

  document.cookie
    .replace(/; /g, ';')
    .split(';')
    .map(cookie => cookie.split('='))
    // Filters only those who has a non-empty key (happens when you delete one)
    .filter(([key]) => key)
    .forEach(([key, val]) => (cookies[key] = val));

  return Promise.resolve(cookies);
};

/* removers */
export const remove = key => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

  return Promise.resolve();
};

export const clearAll = () => {
  document.cookie
    .replace(/; /g, ';')
    .split(';')
    .map(cookie => cookie.split('=')[0])
    .forEach(remove);

  return Promise.resolve();
};

/* Used only for tests, it's private, don't use it */
export const _mock = cookies => {
  Object.keys(cookies).forEach(key => {
    document.cookie = `${key}=${stringify(cookies[key])}`;
  });

  return Promise.resolve();
};

export const _platform = 'browser';
