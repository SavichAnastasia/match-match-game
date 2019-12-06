import { combineReducers } from 'redux';

import cardsReducer from '../containers/CardsFieldContainer/cardsReducer';
import timerReducer from '../containers/TimerContainer/timerReducer';
import playFormReducer from '../containers/MemoryGameContainer/playFormReducer';
import menuReducer from '../containers/Menu/menuReducer';

const memoryGameReducer = combineReducers({
  cardsReducer,
  timerReducer,
  playFormReducer,
  menuReducer,
});

export default memoryGameReducer;
