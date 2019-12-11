import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Timer from '../../components/Timer';
import {
  clearTime, setTime, setResult,
} from './timerActions';

function TimerContainer({ isWin }) {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.timerReducer.time);
  const cardsAmount = useSelector((state) => state.menuReducer.gameDifficulty);
  const timerId = useRef(null);

  const startTimer = useCallback(() => {
    timerId.current = setInterval(() => {
      dispatch(setTime());
    }, 1000);
  }, [dispatch]);

  const stopTimer = useCallback(() => {
    clearInterval(timerId.current);
    dispatch(clearTime());
  }, [dispatch]);

  useEffect(() => {
    if (isWin) {
      dispatch(setResult(cardsAmount));
      clearInterval(timerId.current);
    }
  }, [isWin, cardsAmount, dispatch]);

  return (
    <Timer time={time} startTimer={startTimer} stopTimer={stopTimer} />
  );
}

TimerContainer.propTypes = {
  isWin: PropTypes.bool.isRequired,
};

export default React.memo(TimerContainer);
