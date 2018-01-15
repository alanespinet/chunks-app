import { createStore, combineReducers } from 'redux';

import chunkReducer from '../reducers/chunks';
import filtersReducer from '../reducers/filters';

export default createStore(
  combineReducers({
    chunksReducer: chunkReducer,
    filtersReducer: filtersReducer
  })
);
