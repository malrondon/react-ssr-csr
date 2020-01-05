import '@babel/polyfill';
import './helpers/object-assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { createLocation } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader';
import DetectBrowser from 'react-detect-browser';
import { trigger } from 'redial';
import configureStore from './store';
import routes from '../shared/routes';
import history from '../shared/history';
import registerServiceWorker from '../shared/register-service-worker';
import { listenPageLoad } from './helpers/init';
import { loadCookies } from '../shared/store/cookies/cookies-actions';
import asyncMatchRoutes from '../utils/async-match-routes';

(async () => {
  const isSupportedBrowser = browser => {
    if (!browser) {
      return false;
    }

    const isIE = browser.name === 'ie';

    return !isIE;
  };

  const HotContainer = ({ children }) => {
    if (process.env.NODE_ENV === 'development') {
      return <AppContainer>{children}</AppContainer>;
    }
    return children;
  };

  const hydrate = async _routes => {
    const { components, match, params } = await asyncMatchRoutes(_routes, history.location.pathname);

    const store = configureStore({
      routing: {
        params,
        location: createLocation(history.location.pathname + history.location.search),
      },
    });
    const { dispatch } = store;
    const triggerLocals = {
      store,
      match,
      params,
    };

    await dispatch(loadCookies());

    ReactDOM.hydrate(
      <DetectBrowser>
        {({ browser }) => {
          if (!isSupportedBrowser(browser)) {
            history.push('/atualizar-navegador');
          }

          return (
            <HotContainer>
              <Provider store={store}>
                <ConnectedRouter history={history}>{renderRoutes(_routes)}</ConnectedRouter>
              </Provider>
            </HotContainer>
          );
        }}
      </DetectBrowser>,
      document.querySelector('[data-js="main"]')
    );

    await trigger('fetch', components, triggerLocals);
    await trigger('defer', components, triggerLocals);
    await trigger('postdefer', components, triggerLocals);

    await listenPageLoad(store);
  };

  await hydrate(routes);
})();

if (process.env.NODE_ENV !== 'development') {
  registerServiceWorker();
}
