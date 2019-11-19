import {
  OPEN_CARD, HIDE_CARD, CLOSE_CARD, SET_OPENED_CARD, DELETE_OPENED_CARD, BLOCK_CLICK,
} from './actions';
import cardsList from '../../cards.json';

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const initialState = {
  isBlockedClick: false,
  openedCard: {},
  cards: shuffle([...cardsList, ...cardsList].map((card, index) => ({
    src: card.src,
    opened: false,
    hidden: false,
    index,
  }))),
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case BLOCK_CLICK: {
      return {
        ...state,
        isBlockedClick: true,
      };
    }

    case OPEN_CARD: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.index === action.data) {
            return {
              ...card,
              opened: true,
            };
          } return card;
        }),
      };
    }

    case HIDE_CARD: {
      return {
        ...state,
        isBlockedClick: false,
        cards: state.cards.map((card) => {
          if (card.src === action.data) {
            return {
              ...card,
              hidden: true,
            };
          } return card;
        }),
      };
    }

    case CLOSE_CARD: {
      return {
        ...state,
        isBlockedClick: false,
        cards: state.cards.map((card) => {
          if (card.src === state.openedCard.src || card.src === action.data) {
            return {
              ...card,
              opened: false,
            };
          } return card;
        }),
      };
    }

    case SET_OPENED_CARD: {
      return {
        ...state,
        openedCard: action.data,
      };
    }

    case DELETE_OPENED_CARD: {
      return {
        ...state,
        openedCard: {},
      };
    }

    default: return state;
  }
}
