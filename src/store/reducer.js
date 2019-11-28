import { combineReducers } from 'redux';

import cardsReducer from '../containers/CardsFieldContainer/cardsReducer';
import timerReducer from '../containers/CardsFieldContainer/timerReducer';
import playFormReducer from '../containers/MemoryGameContainer/playFormReducer';

const memoryGameReducer = combineReducers({
  cardsReducer,
  timerReducer,
  playFormReducer,
});

export default memoryGameReducer;
