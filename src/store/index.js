import { createStore } from 'redux';
import cardsReducer from '../containers/CardsFieldContainer/reducer';

const store = createStore(cardsReducer);

export default store;
