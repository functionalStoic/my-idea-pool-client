import { IdeasApi } from '../../api';

import {
  UPDATE_IDEA_REQUEST,
  UPDATE_IDEA_SUCCESS,
  UPDATE_IDEA_FAILURE
} from '../../constants';

function requestUpdateIdea() {
  return {
    type: UPDATE_IDEA_REQUEST,
    isFetching: true
  };
}

function updateIdeaSuccess(idea) {
  return {
    type: UPDATE_IDEA_SUCCESS,
    isFetching: false,
    idea
  };
}

function updateIdeaError(errorMessage) {
  return {
    type: UPDATE_IDEA_FAILURE,
    isFetching: false,
    errorMessage
  };
}

export const updateIdea = ({
  id,
  content,
  impact,
  ease,
  confidence
}) => dispatch => {
  dispatch(requestUpdateIdea());

  IdeasApi.updateIdea(id, content, impact, ease, confidence)
    .then(res => {
      if (res.reason) throw new Error(res.reason);

      // Dispatch success action
      dispatch(updateIdeaSuccess(res));
    })
    .catch(err => dispatch(updateIdeaError(err)));
};
