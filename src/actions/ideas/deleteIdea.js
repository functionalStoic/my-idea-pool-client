import { IdeasApi } from '../../api';

import {
  DELETE_IDEA_REQUEST,
  DELETE_IDEA_SUCCESS,
  DELETE_IDEA_FAILURE
} from '../../constants';

function requestDeleteIdea() {
  return {
    type: DELETE_IDEA_REQUEST,
    isFetching: true
  };
}

function deleteIdeaSuccess(id) {
  return {
    type: DELETE_IDEA_SUCCESS,
    isFetching: false
  };
}

function deleteIdeaError(errorMessage) {
  return {
    type: DELETE_IDEA_FAILURE,
    isFetching: false,
    errorMessage
  };
}

export const deleteIdea = id => dispatch => {
  dispatch(requestDeleteIdea());

  IdeasApi.deleteIdea(id)
    .then(res => {
      if (res.status === 201) {
        dispatch(deleteIdeaSuccess(id));
      } else {
        throw new Error(res.reason);
      }
    })
    .catch(err => {
      dispatch(deleteIdeaError(err));
    });
};
