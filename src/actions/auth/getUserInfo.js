import AuthApi from '../../api/auth.api';

import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from '../../constants';

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

export const getUserInfo = () => (dispatch, getState) => {
  dispatch(requestUserInfo());

  AuthApi.getUserInfo(getState().auth.access_token)
    .then(res => {
      if (res.reason) throw new Error(res.reason);
      dispatch(userInfoSuccess(res));
    })
    .catch(err => dispatch(userInfoError(err)));
};
