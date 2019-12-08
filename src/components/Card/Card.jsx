import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function Card({
  cardsShirt, picture, opened, hidden, onClick, index, cardsAmount,
}) {
  return (
    <div
      className={`${styles.flipCard} ${opened ? `${styles.opened}` : ''} ${hidden ? `${styles.hidden}` : ''} ${cardsAmount === 24 ? `${styles.small}` : ''} `}
      onClick={() => onClick(index, picture)}
    >
      <div
        className={styles.flipCardFront}
        style={{ backgroundImage: `url(${cardsShirt})` }}
      />
      <div
        className={styles.flipCardBack}
        style={{ backgroundImage: `url(${picture})` }}
      />
    </div>
  );
}

Card.propTypes = {
  cardsShirt: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  cardsAmount: PropTypes.number.isRequired,
};

export default React.memo(Card);
