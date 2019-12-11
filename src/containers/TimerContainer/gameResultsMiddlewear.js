import {
  SET_RESULT, GET_RESULTS_FAIL, GET_RESULTS_SUCESS, INIT_RESULTS,
} from './timerActions';

const getPlayerResults = (store) => (next) => async (action) => {
  if (action.type === INIT_RESULTS) {
    try {
      const results = JSON.parse(localStorage.getItem('memoryGameResults'));
      store.dispatch({ type: GET_RESULTS_SUCESS, data: results });
    } catch (e) {
      store.dispatch({ type: GET_RESULTS_FAIL });
    }
  } else if (action.type === SET_RESULT) {
    const { timerReducer: { results, time } } = store.getState();
    const newResults = [...results, { result: time, cardsAmount: action.data }]
      .sort((a, b) => a.result - b.result).slice(0, 10);
    localStorage.setItem('memoryGameResults', JSON.stringify(newResults));
    store.dispatch({ type: GET_RESULTS_SUCESS, data: newResults });
  } else {
    next(action);
  }
};

export default getPlayerResults;
