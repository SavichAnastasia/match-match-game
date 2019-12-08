import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import CardsField from '../../components/CardsField';
import {
  openCard, hideCard, closeCard, setOpenedCard, deleteOpenedCard, blockClick,
} from './cardsActions';

function CardsFieldContainer({ cardsShirt }) {
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
    <CardsField onClick={onClick} cards={cards} cardsShirt={cardsShirt} />
  );
}

CardsFieldContainer.propTypes = {
  cardsShirt: PropTypes.string.isRequired,
};

export default React.memo(CardsFieldContainer);
