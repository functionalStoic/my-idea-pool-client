import { NEW_IDEA_REQUEST } from '../../constants';
import { v4 } from 'uuid';

function requestNewIdea(idea) {
  return {
    type: NEW_IDEA_REQUEST,
    idea
  };
}

export const newIdea = () => dispatch =>
  dispatch(
    requestNewIdea({
      id: v4(),
      content: '',
      impact: 10,
      ease: 10,
      confidence: 10,
      status: 'new'
    })
  );
