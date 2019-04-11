const querystring = require('querystring');

export const getQueryParamsUrl = params => {
  if (!params || Object.keys(params).length === 0) {
    return '';
  }
  return `?${querystring.stringify(params)}`;
};
