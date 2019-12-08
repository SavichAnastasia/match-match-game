import { createStore } from 'redux';
import memoryGameReducer from './reducer';

const store = createStore(memoryGameReducer);

export default store;
