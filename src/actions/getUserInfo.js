import {
  API_DOMAIN,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from '../constants';

function requestUserInfo() {
  return {
    type: GET_USER_REQUEST,
    isFetching: true
  };
}

function userInfoSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    isFetching: false,
    user
  };
}

function userInfoError(message) {
  return {
    type: GET_USER_FAILURE,
    isFetching: false,
    message
  };
}

export function getUserInfo() {
  return dispatch => {
    dispatch(requestUserInfo());
    const access_token = localStorage.getItem('access_token');
    if (!access_token) return;

    return fetch(`${API_DOMAIN}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Access-Token': access_token
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.reason) throw new Error(res.reason);

        dispatch(userInfoSuccess(res));
      })
      .catch(err => dispatch(userInfoError(err)));
  };
}
