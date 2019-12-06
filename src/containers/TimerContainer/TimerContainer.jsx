import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Timer from '../../components/Timer';
import {
  clearTime, setTime,
} from './timerActions';

export default function TimerContainer() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.timerReducer.time);
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      dispatch(setTime());
    }, 1000);
  };

  const stopTimer = () => {
    dispatch(clearTime());
    clearInterval(timerId.current);
  };

  return (
    <Timer time={time} startTimer={startTimer} stopTimer={stopTimer} />
  );
}
