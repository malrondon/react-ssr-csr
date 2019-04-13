import '@babel/polyfill';
import React from 'react';
import { trigger } from 'redial';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createLocation } from 'history';
import { ConnectedRouter } from 'react-router-redux';

import history from '../../shared/history';
import template from '../templates/app';
import routes from '../../shared/routes';
import configureStore from '../store';
import { sanitize } from '../helpers';
import asyncMatchRoutes from '../../utils/async-match-routes';

const controller = async (req, res, next) => {
  const { components, match, params } = await asyncMatchRoutes(routes, req.path);
  const { cookies } = req;

  const store = configureStore({
    routing: {
      params,
      location: createLocation(req.url),
    },
    entities: {
      account: {
        social: {},
      },
    },
    session: {
      cookies,
    },
  });

  if (match.route) {
    newrelic.setTransactionName(match.route.path);
    newrelic.addCustomParameter('url', req.url);
  }

  const locals = {
    store,
    match,
    params,
  };

  try {
    await trigger('fetch', components, locals);

    const context = {};
    const html = renderToString(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </ConnectedRouter>
      </Provider>
    );
    const helmet = Helmet.renderStatic();
    const state = store.getState();

    res.send(template({ state: sanitize(state), html, helmet }));
  } catch (error) {
    console.error(' ERROR:', error);
    res.status(500);
  }
};

export default controller;
