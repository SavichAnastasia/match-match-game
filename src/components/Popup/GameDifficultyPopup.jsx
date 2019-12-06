import React from 'react';

import styles from './styles.module.css';

export default function GameDifficultyPopup({ name, onChange, value }) {
  return (
    <div className={styles.popupContainer}>
      <h4>{name}</h4>
      <label>
        <input type="radio" name={name} value={6} checked={value === '6'} onChange={onChange} />
        12 cards
      </label>
      <label>
        <input type="radio" name={name} value={9} checked={value === '9'} onChange={onChange} />
        18 cards
      </label>
      <label>
        <input type="radio" name={name} value={12} checked={value === '12'} onChange={onChange} />
        24 cards
      </label>
    </div>
  );
}
