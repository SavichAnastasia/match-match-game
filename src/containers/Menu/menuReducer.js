import {
  SET_CARDS_SHIRT, SET_VISIBLE_ITEM, SET_GAME_DIFFICULTY, SET_RESULT,
} from './menuActions';

const initialState = {
  gameDifficulty: 12,
  visibleItem: null,
  cardsShirt: 'img/minions/cardShirt.jpg',
  results: [],
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

    case SET_RESULT: {
      return {
        ...state,
        results: (() => {
          const newResults = state.results.slice(0).push(action.data);
          return newResults.sort((a, b) => a.time - b.time).slice(0, 10);
        })(),
      };
    }

    default: return state;
  }
}
