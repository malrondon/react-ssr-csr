import promise from 'es6-promise';

import { getQueryParamsUrl } from '../../modules';
import {
  API_ACCOUNT,
  axiosInstance,
} from '../../config';

promise.polyfill();

const areas = {
  get(params) {

    const query = getQueryParamsUrl(params);

    return axiosInstance(API_ACCOUNT).get(`/${query}`);
  },
};

export default areas;
