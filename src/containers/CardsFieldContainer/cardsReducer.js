import {
  OPEN_CARD, HIDE_CARD, CLOSE_CARD, SET_OPENED_CARD, DELETE_OPENED_CARD, BLOCK_CLICK,
  RESET_CARDSFIELD, SET_CARDS,
} from './cardsActions';

const initialState = {
  isBlockedClick: false,
  openedCard: null,
  cards: [],
  hiddenCards: 0,
  isWin: false,
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS: {
      return {
        ...state,
        cards: action.data,
      };
    }

    case BLOCK_CLICK: {
      return {
        ...state,
        isBlockedClick: true,
      };
    }

    case RESET_CARDSFIELD: {
      return {
        ...state,
        cards: initialState.cards,
        isWin: false,
        hiddenCards: 0,
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
      let count = state.hiddenCards;
      return {
        ...state,
        isBlockedClick: false,
        cards: state.cards.map((card) => {
          if (card.src === action.data) {
            count += 1;
            return {
              ...card,
              hidden: true,
            };
          } return card;
        }),
        hiddenCards: count,
        isWin: count === state.cards.length,
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
        openedCard: null,
      };
    }

    default: return state;
  }
}
