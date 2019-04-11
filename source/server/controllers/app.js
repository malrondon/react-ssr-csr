import '@babel/polyfill';
import React from 'react';
import { trigger } from 'redial';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createLocation } from 'history';
import { fromJS } from 'immutable';
import { ConnectedRouter } from 'react-router-redux';

import history from '../../shared/history';
import template from '../templates/app';
import routes from '../../shared/routes';
import configureStore from '../store';
import { sanitize } from '../helpers';
import {
  LS_USER,
  LS_USER_TOKEN,
  LS_SOCIAL_PROFILE,
  LS_PROMOCODE,
  LS_LAT,
  LS_LNG,
  LS_AREA,
  LS_USAGE,
} from '../../shared/config';
import asyncMatchRoutes from '../../utils/async-match-routes';
import * as geolocationActions from '../../shared/store/geolocation/geolocation-actions';

const controller = async (req, res, next) => {
  const { components, match, params } = await asyncMatchRoutes(routes, req.path);
  const { cookies } = req;

  const profile = cookies[LS_SOCIAL_PROFILE];
  const lsProfile = profile ? JSON.parse(profile) : {};
  const user = cookies[LS_USER];
  const lsUser = user ? JSON.parse(user) : {};
  const userToken = cookies[LS_USER_TOKEN];
  const promocode = cookies[LS_PROMOCODE];
  const latitude = cookies[LS_LAT];
  const longitude = cookies[LS_LNG];
  const area = cookies[LS_AREA] ? JSON.parse(cookies[LS_AREA]) : {};
  const usage = cookies[LS_USAGE];
  const lsUsage = usage ? JSON.parse(usage) : {};

  const store = configureStore({
    routing: {
      params,
      location: createLocation(req.url),
    },
    geolocation: {
      latitude: latitude,
      longitude: longitude,
    },
    entities: {
      account: {
        social: {
          profile: fromJS(lsProfile),
        },
        user: lsUser,
        token: userToken,
        promocode: {
          code: promocode,
        },
      },
      areas: {
        currentArea: fromJS(area),
      },
      usage: {
        data: fromJS(lsUsage),
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
    if (!store.getState().geolocation.latitude) {
      await store.dispatch(geolocationActions.fetchGeolocation());
    }
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
