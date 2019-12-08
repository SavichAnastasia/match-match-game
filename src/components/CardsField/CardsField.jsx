import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import styles from './styles.module.css';

function CardField({ cards, onClick, cardsShirt }) {
  return (
    <div className={styles.cardField}>
      {
        cards.map((card) => (
          <Card
            key={card.index}
            cardsAmount={cards.length}
            cardsShirt={cardsShirt}
            index={card.index}
            onClick={onClick}
            picture={card.src}
            opened={card.opened}
            hidden={card.hidden}
          />
        ))
        }
    </div>
  );
}

CardField.propTypes = {
  cards: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  cardsShirt: PropTypes.string.isRequired,
};

export default React.memo(CardField);
