import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Congratulations from '../../components/Congratulations';
import {
  resetCardsField, setCards,
} from '../CardsFieldContainer/cardsActions';
import shuffle from '../CardsFieldContainer/shuffleFunc';
import { minions, minionCardShirt } from '../../assets/img/minions/minions';
import { smiles } from '../../assets/img/smiles/smiles';
import BackButton from '../../components/BackButton';
import CardsFieldContainer from '../CardsFieldContainer';
import TimerContainer from '../TimerContainer/TimerContainer';

export default function MainContainer() {
  const dispatch = useDispatch();
  const isWin = useSelector((state) => state.cardsReducer.isWin);
  const cardsAmount = useSelector((state) => state.menuReducer.gameDifficulty);
  const cardsShirt = useSelector((state) => state.menuReducer.cardsShirt);

  const cardsImage = cardsShirt === minionCardShirt ? minions : smiles;

  const goBack = useCallback(() => {
    dispatch(resetCardsField());
  }, [dispatch]);

  (function initCardsField(arr) {
    const requiredCards = arr.slice(0, cardsAmount);
    const cardsArray = shuffle([...requiredCards, ...requiredCards].map((card, index) => ({
      src: card,
      opened: false,
      hidden: false,
      index,
    })));
    dispatch(setCards(cardsArray));
  }(cardsImage));

  return (
    <>
      {isWin ? <Congratulations />
        : (
          <>
            <CardsFieldContainer cardsShirt={cardsShirt} />
          </>
        )}
      <TimerContainer isWin={isWin} cardsAmount={cardsAmount} />
      <BackButton onClick={goBack} />
    </>
  );
}
