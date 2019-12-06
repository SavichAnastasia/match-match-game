import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardsField from '../../components/CardsField';
import {
  openCard, hideCard, closeCard, setOpenedCard, deleteOpenedCard, blockClick,
} from './cardsActions';

export default function CardsFieldContainer() {
  const dispatch = useDispatch();
  const openedCard = useSelector((state) => state.cardsReducer.openedCard);
  const isBlockedClick = useSelector((state) => state.cardsReducer.isBlockedClick);
  const cards = useSelector((state) => state.cardsReducer.cards);

  const onClick = useCallback((index, src) => {
    if (isBlockedClick) return;

    dispatch(openCard(index));

    if (openedCard) {
      if (index === openedCard.index) return;
      dispatch(blockClick());

      if (src === openedCard.src) {
        setTimeout(() => {
          dispatch(hideCard(src));
          dispatch(deleteOpenedCard());
        }, 1500);
      } else {
        setTimeout(() => {
          dispatch(closeCard(src));
          dispatch(deleteOpenedCard());
        }, 1500);
      }
    } else {
      dispatch(setOpenedCard(src, index));
    }
  }, [dispatch, isBlockedClick, openedCard]);

  return (
    <CardsField onClick={onClick} cards={cards} />
  );
}
