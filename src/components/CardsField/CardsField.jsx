import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import styles from './styles.module.css';

function CardField({ cards, onClick }) {
  console.log(1);

  return (
    <div className={styles.cardField}>
      {
        cards.map((card) => <Card key={card.index} cardShirt="img/minions/cardShirt.jpg" index={card.index} onClick={onClick} picture={card.src} opened={card.opened} hidden={card.hidden} />)
      }
    </div>
  );
}

CardField.propTypes = {
  cards: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(CardField);
