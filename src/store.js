import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(apiMiddleware, thunkMiddleware, logger)
)(createStore);

export default createStoreWithMiddleware(
  rootReducer,
  window.REDUX_INITIAL_STATE
  // composeWithDevTools(
  //   applyMiddleware(
  //     thunkMiddleware, // lets us dispatch() functions
  //     logger // neat middleware that logs actions
  //   )
  // )
);
