import { createStore, applyMiddleware, compose } from 'redux';
import memoryGameReducer from './reducer';
import initializeMiddleware from '../containers/MainContainer/initializeMiddleware';
import getPlayerResults from '../containers/TimerContainer/gameResultsMiddlewear';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  memoryGameReducer,
  composeEnhancers(
    applyMiddleware(
      initializeMiddleware,
      getPlayerResults,
    ),
  ),
);

export default store;
