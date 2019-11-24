import {
  SET_TIMER, SET_TIME, CLEAR_TIME, CLEAR_TIMER,
} from './timerActions';

const initialState = {
  time: 0,
  timer: null,
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIMER: {
      return {
        ...state,
        timer: action.data,
      };
    }

    case CLEAR_TIMER: {
      return {
        ...state,
        timer: null,
      };
    }

    case SET_TIME: {
      return {
        ...state,
        time: state.time + 1,
      };
    }

    case CLEAR_TIME: {
      return {
        ...state,
        time: 0,
      };
    }

    default: return state;
  }
}
