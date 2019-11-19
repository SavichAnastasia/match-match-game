import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardsField from '../../components/CardsField';
import {
  OPEN_CARD, HIDE_CARD, CLOSE_CARD, SET_OPENED_CARD, DELETE_OPENED_CARD, BLOCK_CLICK,
} from './actions';

export default function CardsFieldContainer() {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const openedCard = useSelector((state) => state.openedCard);
  const isBlockedClick = useSelector((state) => state.isBlockedClick);

  const onClick = useCallback((index, src) => {
    if (isBlockedClick) return;
    if (index === openedCard.index) return;

    dispatch({
      type: OPEN_CARD,
      data: index,
    });

    if (openedCard.src) {
      dispatch({
        type: BLOCK_CLICK,
      });

      if (src === openedCard.src) {
        setTimeout(() => {
          dispatch({
            type: HIDE_CARD,
            data: src,
          });
          dispatch({
            type: DELETE_OPENED_CARD,
          });
        }, 1500);
      } else {
        setTimeout(() => {
          dispatch({
            type: CLOSE_CARD,
            data: src,
          });
          dispatch({
            type: DELETE_OPENED_CARD,
          });
        }, 1500);
      }
    } else {
      dispatch({
        type: SET_OPENED_CARD,
        data: {
          src,
          index,
        },
      });
    }
  }, [dispatch, isBlockedClick, openedCard]);

  return (
    <>
      <CardsField onClick={onClick} cards={cards} />
    </>
  );
}
