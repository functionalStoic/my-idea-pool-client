import { AuthApi } from '../../api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants';

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true
  };
}

function loginSuccess(tokens) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export const loginUser = ({ email, password }) => dispatch => {
  dispatch(requestLogin());

  AuthApi.login(email, password)
    .then(({ reason, jwt: access_token, refresh_token }) => {
      if (reason) throw new Error(reason);

      // Set access & refresh tokens in local storage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Dispatch success action
      dispatch(loginSuccess({ access_token, refresh_token }));
    })
    .catch(err => dispatch(loginError(err)));
};
