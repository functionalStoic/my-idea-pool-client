import {
  API_DOMAIN,
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_FAILURE
} from '../../constants';

import store from '../../store';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  timeout: 5000,
  headers: {
    contentType: 'application/json',
    accept: 'application/json',
    'X-Access-Token': localStorage.getItem('access_token')
  }
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const refresh_token = localStorage.getItem('refresh_token');

      store.dispatch({
        type: TOKEN_REFRESH_REQUEST,
        isFetching: true
      });

      return axiosInstance
        .post('/access-tokens/refresh', { refresh_token })
        .then(({ data }) => {
          store.dispatch({
            type: TOKEN_REFRESH_SUCCESS,
            isFetching: false,
            isAuthenticated: true,
            access_token: data.jwt
          });

          localStorage.setItem('access_token', data.jwt);

          axiosInstance.defaults.headers['X-Access-Token'] = data.jwt;
          originalRequest.headers['X-Access-Token'] = data.jwt;

          return axios(originalRequest);
        })
        .catch(err => {
          store.dispatch({
            type: TOKEN_REFRESH_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            access_token: undefined,
            refresh_token: undefined,
            errorMessage: err
          });
        });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
