import { AuthApi } from '../../api';

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../../constants';

function requestSignup() {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true
  };
}

function signupSuccess(tokens) {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token
  };
}

function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export const signupUser = ({ name, email, password }) => dispatch => {
  dispatch(requestSignup());

  AuthApi.signup(name, email, password)
    .then(({ reason, jwt: access_token, refresh_token }) => {
      if (reason) throw new Error(reason);

      // Set access & refresh tokens in local storage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Dispatch success action
      dispatch(signupSuccess({ access_token, refresh_token }));
    })
    .catch(err => dispatch(signupError(err)));
};
