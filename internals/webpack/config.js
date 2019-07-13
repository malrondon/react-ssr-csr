const pkg = require('../../package.json');
const env = require('../../source/shared/config/environment');

module.exports = {
  env: {
    NODE_ENV: env.NODE_ENV,
    PUBLIC_URL: env.PUBLIC_URL,
    BFF: env.BFF,
    APP_VERSION: pkg.version,
  },
};
