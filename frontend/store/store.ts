import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// remove unused imports
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
