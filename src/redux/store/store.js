import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import chunkReducer from '../reducers/chunks';
import filtersReducer from '../reducers/filters';

export default createStore(
  combineReducers({
    chunksReducer: chunkReducer,
    filtersReducer: filtersReducer
  }),
  applyMiddleware(thunk)
);
