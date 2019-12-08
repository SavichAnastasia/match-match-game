import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function GameDifficultyPopup({ name, onChange, value }) {
  return (
    <div className={styles.popupContainer}>
      <h4>{name}</h4>
      <label>
        <input
          type="radio"
          name={name}
          value={6}
          onChange={onChange}
          checked={value === '6'}
        />
        12 cards
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value={9}
          onChange={onChange}
          checked={value === '9'}
        />
        18 cards
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value={12}
          onChange={onChange}
          checked={value === '12'}
        />
        24 cards
      </label>
    </div>
  );
}

GameDifficultyPopup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default React.memo(GameDifficultyPopup);
