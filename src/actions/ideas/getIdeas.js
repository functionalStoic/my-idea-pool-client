import { IdeasApi } from '../../api';

import {
  GET_IDEAS_REQUEST,
  GET_IDEAS_SUCCESS,
  GET_IDEAS_FAILURE
} from '../../constants';

function requestGetIdeas() {
  return {
    type: GET_IDEAS_REQUEST,
    isFetching: true
  };
}

function getIdeasSuccess(ideas, page) {
  return {
    type: GET_IDEAS_SUCCESS,
    isFetching: false,
    page,
    ideas
  };
}

function getIdeasError(errorMessage) {
  return {
    type: GET_IDEAS_FAILURE,
    isFetching: false,
    errorMessage
  };
}

export const getIdeas = page => dispatch => {
  dispatch(requestGetIdeas());

  IdeasApi.getIdeas(page)
    .then(res => {
      if (res.reason) throw new Error(res.reason);
      dispatch(getIdeasSuccess(res, page));
    })
    .catch(err => dispatch(getIdeasError(err)));
};
