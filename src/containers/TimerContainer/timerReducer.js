import {
  SET_TIME, CLEAR_TIME, GET_RESULTS_FAIL, GET_RESULTS_SUCESS,
} from './timerActions';

const initialState = {
  time: 0,
  timer: null,
  results: [],
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIME: {
      return {
        ...state,
        time: state.time + 1,
      };
    }

    case CLEAR_TIME: {
      return {
        ...state,
        resultTime: state.time,
        time: 0,
      };
    }

    case GET_RESULTS_SUCESS: {
      return {
        ...state,
        results: action.data,
      };
    }

    case GET_RESULTS_FAIL: {
      return {
        ...state,
        results: [],
      };
    }

    default: return state;
  }
}
