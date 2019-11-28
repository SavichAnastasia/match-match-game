import { createStore } from 'redux';
import memoryGameReducer from './reducer';

const store = createStore(memoryGameReducer);
console.log(store.getState());

export default store;
