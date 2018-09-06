import {
  API_DOMAIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants';

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true
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

export function loginUser({ email, password }) {
  return dispatch => {
    dispatch(requestLogin());

    return fetch(`${API_DOMAIN}/access-tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(({ reason, jwt, refresh_token }) => {
        if (reason) throw new Error(reason);

        // Set access & refresh tokens in local storage
        localStorage.setItem('access_token', jwt);
        localStorage.setItem('refresh_token', refresh_token);

        // Dispatch success action
        dispatch(loginSuccess());
      })
      .catch(err => dispatch(loginError(err)));
  };
}
