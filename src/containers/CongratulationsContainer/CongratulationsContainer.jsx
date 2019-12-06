import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setResult } from '../Menu/menuActions';
import timeConverter from '../../components/Timer/timeConverter';
import Congratulations from '../../components/Congratulations';

export default function CongratulationsContainer({ cardsAmount }) {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.timerReducer.result);

  const gameResult = {
    cardsAmount,
    result,
  };
  dispatch(setResult(gameResult));

  return (
    <Congratulations result={timeConverter(result)} />
  );
}
