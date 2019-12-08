import React from 'react';
import PropTypes from 'prop-types';

import timeConverter from '../Timer/timeConverter';
import styles from './styles.module.css';

function Top10Popup({ name, results, player }) {
  return (
    <div className={styles.popupContainer}>
      <h4>{name}</h4>
      <div className={styles.playerName}>
        {`${player.firstName} ${player.lastName}`}
      </div>
      <div className={styles.resultContainer}>
        <div>Difficulty</div>
        <div>Result </div>
      </div>
      {results.map((item, index) => (
        <div key={index + item.result} className={styles.resultContainer}>
          <div>{item.cardsAmount * 2}</div>
          <div>{timeConverter(item.result)}</div>
        </div>
      ))}

    </div>
  );
}

Top10Popup.propTypes = {
  name: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired,
};

export default React.memo(Top10Popup);
