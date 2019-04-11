import { createBrowserHistory, createMemoryHistory } from 'history';

const isBrowser = process.env.APP_BROWSER;

const history = () => {
  if (isBrowser) {
    return createBrowserHistory();
  }

  return createMemoryHistory();
};

export default history();
