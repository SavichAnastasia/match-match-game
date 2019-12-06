export const SET_TIME = 'SET_TIME';
export const CLEAR_TIME = 'CLEAR_TIME';

export function setTime() {
  return {
    type: SET_TIME,
  };
}

export function clearTime() {
  return {
    type: CLEAR_TIME,
  };
}
