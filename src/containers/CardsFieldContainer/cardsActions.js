export const OPEN_CARD = 'OPEN_CARD';
export const HIDE_CARD = 'HIDE_CARD';
export const CLOSE_CARD = 'CLOSE_CARD';
export const GET_CARDS = 'GET_CARDS';
export const SET_OPENED_CARD = 'SET_OPENED_CARD';
export const DELETE_OPENED_CARD = 'DELETE_OPENED_CARD';
export const BLOCK_CLICK = 'LOCK_CLICK';
export const RESET_CARDSFIELD = 'RESET_CARDSFIELD';

export function resetCardsField() {
  return {
    type: RESET_CARDSFIELD,
  };
}

export function openCard(index) {
  return {
    type: OPEN_CARD,
    data: index,
  };
}

export function blockClick() {
  return {
    type: BLOCK_CLICK,
  };
}

export function hideCard(src) {
  return {
    type: HIDE_CARD,
    data: src,
  };
}

export function deleteOpenedCard() {
  return {
    type: DELETE_OPENED_CARD,
  };
}

export function closeCard(src) {
  return {
    type: CLOSE_CARD,
    data: src,
  };
}

export function setOpenedCard(src, index) {
  return {
    type: SET_OPENED_CARD,
    data: {
      src,
      index,
    },
  };
}
