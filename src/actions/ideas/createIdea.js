import { IdeasApi } from '../../api';

import {
  CREATE_IDEA_REQUEST,
  CREATE_IDEA_SUCCESS,
  CREATE_IDEA_FAILURE
} from '../../constants';

function requestCreateIdea() {
  return {
    type: CREATE_IDEA_REQUEST,
    isFetching: true
  };
}

function createIdeaSuccess(idea) {
  return {
    type: CREATE_IDEA_SUCCESS,
    isFetching: false,
    idea
  };
}

function createIdeaError(message) {
  return {
    type: CREATE_IDEA_FAILURE,
    isFetching: false,
    message
  };
}

export const createIdea = ({
  content,
  impact,
  ease,
  confidence
}) => dispatch => {
  dispatch(requestCreateIdea());

  IdeasApi.createIdea(content, impact, ease, confidence)
    .then(res => {
      if (res.reason) throw new Error(res.reason);

      // Dispatch success action
      dispatch(createIdeaSuccess(res));
    })
    .catch(err => dispatch(createIdeaError(err)));
};
