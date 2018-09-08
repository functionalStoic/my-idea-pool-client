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

function getIdeasSuccess(ideas) {
  return {
    type: GET_IDEAS_SUCCESS,
    isFetching: false,
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

export const getIdeas = pageNumber => dispatch => {
  dispatch(requestGetIdeas());

  IdeasApi.getIdeas(pageNumber)
    .then(res => {
      if (res.reason) throw new Error(res.reason);
      dispatch(getIdeasSuccess(res));
    })
    .catch(err => dispatch(getIdeasError(err)));
};
