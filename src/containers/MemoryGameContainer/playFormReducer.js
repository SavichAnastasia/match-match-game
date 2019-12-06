import { SET_PLAYER } from './playFormActions';

const initialState = {
  player: JSON.parse(localStorage.getItem('memoryGamePlayer')),
};

export default function playFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER: {
      return {
        ...state,
        player: action.data,
      };
    }
    default: return state;
  }
}
