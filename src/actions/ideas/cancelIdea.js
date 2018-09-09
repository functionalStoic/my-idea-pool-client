import { CANCEL_IDEA_REQUEST } from '../../constants';

function requestCancelIdea(id) {
  return {
    type: CANCEL_IDEA_REQUEST,
    id
  };
}

export const cancelIdea = id => dispatch => dispatch(requestCancelIdea(id));
