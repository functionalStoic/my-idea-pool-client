import AuthApi from '../../api/auth.api';

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../../constants';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

function logoutError(errorMessage) {
  return {
    type: LOGOUT_FAILURE,
    isFetching: false,
    errorMessage
  };
}

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());

  AuthApi.logout()
    .then(res => {
      if (res.status === 204) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        dispatch(logoutSuccess());
      } else {
        throw new Error(res.reason);
      }
    })
    .catch(err => {
      dispatch(logoutError(err));
    });
};
