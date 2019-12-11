import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Congratulations from '../../components/Congratulations';
import {
  resetCardsField, initGame,
} from '../CardsFieldContainer/cardsActions';
import BackButton from '../../components/BackButton';
import CardsFieldContainer from '../CardsFieldContainer';
import TimerContainer from '../TimerContainer/TimerContainer';

export default function MainContainer() {
  const dispatch = useDispatch();
  const isWin = useSelector((state) => state.cardsReducer.isWin);

  const goBack = useCallback(() => {
    dispatch(resetCardsField());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initGame());
  }, [dispatch]);

  return (
    <>
      {isWin ? <Congratulations />
        : (
          <CardsFieldContainer />
        )}
      <TimerContainer isWin={isWin} />
      <BackButton onClick={goBack} />
    </>
  );
}
