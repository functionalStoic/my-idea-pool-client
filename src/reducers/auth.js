import {
  // LOGIN
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // SIGNUP
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  // LOGOUT
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  // GET USER INFO
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  // TOKEN REFRESH
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_FAILURE
} from '../constants';

const initialAuthState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('access_token') ? true : false,
  access_token: localStorage.getItem('access_token'),
  refresh_token: localStorage.getItem('refresh_token')
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        access_token: action.access_token,
        refresh_token: action.refresh_token
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        access_token: action.access_token,
        refresh_token: action.refresh_token
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        access_token: undefined,
        refresh_token: undefined,
        user: {}
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        user: action.user
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };

    case TOKEN_REFRESH_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOKEN_REFRESH_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        access_token: action.access_token
      };
    case TOKEN_REFRESH_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
        errorMessage: action.message
      };
    default:
      return state;
  }
};
