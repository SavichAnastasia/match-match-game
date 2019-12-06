import React from 'react';

import styles from './styles.module.css';

export default function GameDifficultyPopup({ name }) {
  return (
    <div className={styles.popupContainer}>
      <h4>{name}</h4>
      <label>
        <input type="radio" name={name} value="minions" defaultChecked />
          minions
      </label>
      <label>
        <input type="radio" name={name} value="cars" />
          cars
      </label>
    </div>
  );
}
