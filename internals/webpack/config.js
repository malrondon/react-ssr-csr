const pkg = require('../../package.json');
const env = require('../../source/shared/config/environment');

module.exports = {
  env: {
    NODE_ENV: env.NODE_ENV,
    PUBLIC_URL: env.PUBLIC_URL,
    API_ACCOUNT: env.API_ACCOUNT,
    API_ACCOUNT_OLD: env.API_ACCOUNT_OLD,
    API_SEARCH: env.API_SEARCH,
    BFF: env.BFF,
    OAUTH_GOOGLE: env.OAUTH_GOOGLE,
    OAUTH_FACEBOOK: env.OAUTH_FACEBOOK,
    GTM_CODE: env.GTM_CODE,
    GTAG_CODE: env.GTAG_CODE,
    GOOGLEAPIS_GEOLOCATE: env.GOOGLEAPIS_GEOLOCATE,
    GOOGLEAPIS_MAPS: env.GOOGLEAPIS_MAPS,
    API_V4: env.API_V4,
    APP_VERSION: pkg.version,
  },
};
