export const SET_VISIBLE_ITEM = 'SET_VISIBLE_ITEM';
export const SET_GAME_DIFFICULTY = 'SET_GAME_DIFFICULTY';
export const SET_CARDS_SHIRT = 'SET_CARDS_SHIRT';

export function setVisibleItem(name) {
  return {
    type: SET_VISIBLE_ITEM,
    data: name,
  };
}

export function setGameDifficulty(value) {
  return {
    type: SET_GAME_DIFFICULTY,
    data: value,
  };
}

export function setCardsShirt(src) {
  return {
    type: SET_CARDS_SHIRT,
    data: src,
  };
}
