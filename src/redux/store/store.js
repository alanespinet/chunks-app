import { createStore } from 'redux';
import chunkReducer from '../reducers/chunks';

export default createStore( chunkReducer );
