import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function Card({
  cardShirt, picture, opened, hidden, onClick, index,
}) {
  return (
    <div
      className={`${styles.flipCard} ${opened ? `${styles.opened}` : ''} ${hidden ? `${styles.hidden}` : ''}`}
      onClick={() => onClick(index, picture)}
    >
      <div
        className={styles.flipCardFront}
        style={{ backgroundImage: `url(${cardShirt}` }}
      />
      <div
        className={styles.flipCardBack}
        style={{ backgroundImage: `url(${picture}` }}
      />
    </div>
  );
}

Card.propTypes = {
  cardShirt: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default React.memo(Card);
