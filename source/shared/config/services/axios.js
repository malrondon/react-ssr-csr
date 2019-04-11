import axios from 'axios';

export const axiosInstance = (baseURL, headers) => {
  return axios.create({
    baseURL,
    timeout: 6000,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};
