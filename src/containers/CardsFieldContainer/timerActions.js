export const SET_TIMER = 'SET_TIMER';
export const SET_TIME = 'SET_TIME';
export const CLEAR_TIMER = 'CLEAR_TIMER';
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

export function setTimer(id) {
  return {
    type: SET_TIMER,
    data: id,
  };
}

export function clearTimer() {
  return {
    type: CLEAR_TIMER,
  };
}
