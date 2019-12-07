import {
  SET_CARDS_SHIRT, SET_VISIBLE_ITEM, SET_GAME_DIFFICULTY, SET_RESULT,
} from './menuActions';
import { minionCardShirt } from '../../assets/img/minions/minions';

const initialState = {
  gameDifficulty: 12,
  visibleItem: null,
  cardsShirt: minionCardShirt,
  results: JSON.parse(localStorage.getItem('memoryGameResults')) || [],
};

export default function manuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBLE_ITEM: {
      return {
        ...state,
        visibleItem: action.data,
      };
    }

    case SET_GAME_DIFFICULTY: {
      return {
        ...state,
        gameDifficulty: action.data,
      };
    }

    case SET_CARDS_SHIRT: {
      return {
        ...state,
        cardsShirt: action.data,
      };
    }

    case SET_RESULT: {
      const newResults = [...state.results, action.data]
        .sort((a, b) => a.result - b.result).slice(0, 10);
      localStorage.setItem('memoryGameResults', JSON.stringify(newResults));
      return {
        ...state,
        results: newResults,
      };
    }

    default: return state;
  }
}
