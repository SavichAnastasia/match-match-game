import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import timerReducer from './timerReducer';

const memoryGameReducer = combineReducers({
  cardsReducer,
  timerReducer,
});

export default memoryGameReducer;
