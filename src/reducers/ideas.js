import {
  CREATE_IDEA_REQUEST,
  CREATE_IDEA_SUCCESS,
  CREATE_IDEA_FAILURE,
  DELETE_IDEA_REQUEST,
  DELETE_IDEA_SUCCESS,
  DELETE_IDEA_FAILURE,
  GET_IDEAS_REQUEST,
  GET_IDEAS_SUCCESS,
  GET_IDEAS_FAILURE,
  UPDATE_IDEA_REQUEST,
  UPDATE_IDEA_SUCCESS,
  UPDATE_IDEA_FAILURE
} from '../constants';

// The ideas reducer
export default function ideas(
  state = { isFetching: false, ideas: [...ideaList], errorMessage: undefined },
  action
) {
  switch (action.type) {
    case CREATE_IDEA_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case CREATE_IDEA_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        ideas: [...state.ideas, action.idea]
      };
    case CREATE_IDEA_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };
    case DELETE_IDEA_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case DELETE_IDEA_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        ideas: state.ideas.filter(idea => idea.id !== action.id)
      };
    case DELETE_IDEA_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };
    case GET_IDEAS_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case GET_IDEAS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        ideas
      };
    case GET_IDEAS_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };
    case UPDATE_IDEA_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case UPDATE_IDEA_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        ideas: state.ideas.map(
          idea => (idea.id === action.idea.id ? action.idea : idea)
        )
      };
    case UPDATE_IDEA_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
}

const ideaList = [
  {
    id: 'ir9td2tvq',
    content: 'Finish Ideas Layout',
    impact: 3,
    ease: 8,
    confidence: 8,
    average_score: 6.333333333333333,
    created_at: 1524210786
  },
  {
    id: 'ir9td2p51',
    content: 'Build Redux State, Reducers and Actions.',
    impact: 2,
    ease: 8,
    confidence: 8,
    average_score: 6.0,
    created_at: 1524210786
  },
  {
    id: 'ir9td2lz8',
    content: 'Build Ajax Requests',
    impact: 1,
    ease: 8,
    confidence: 8,
    average_score: 5.666666666666667,
    created_at: 1524210786
  }
];
