import {
  API_DOMAIN,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../constants';

function requestSignup() {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true
  };
}

function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true
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

export function signupUser({ name, email, password }) {
  return dispatch => {
    dispatch(requestSignup());

    return fetch(`${API_DOMAIN}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(res => res.json())
      .then(({ reason, jwt, refresh_token }) => {
        if (reason) throw new Error(reason);

        // Set access & refresh tokens in local storage
        localStorage.setItem('access_token', jwt);
        localStorage.setItem('refresh_token', refresh_token);

        // Dispatch success action
        dispatch(signupSuccess());
      })
      .catch(err => dispatch(signupError(err)));
  };
}
