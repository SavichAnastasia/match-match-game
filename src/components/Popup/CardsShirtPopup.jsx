import React from 'react';

import { minionCardShirt } from '../../assets/img/minions/minions';
import { smileCardShirt } from '../../assets/img/smiles/smiles';
import styles from './styles.module.css';

export default function GameDifficultyPopup({ name, onChange, value }) {
  return (
    <div className={styles.popupContainer}>
      <h4>{name}</h4>
      <label>
        <input type="radio" name={name} value={minionCardShirt} onChange={onChange} checked={value == minionCardShirt} />
        <div className={styles.cardShirt}>
          <img src={minionCardShirt} alt="minions" />
        </div>
      </label>
      <label>
        <input type="radio" name={name} value={smileCardShirt} onChange={onChange} checked={value == smileCardShirt} />
        <div className={styles.cardShirt}>
          <img src={smileCardShirt} alt="smiles" />
        </div>
      </label>
    </div>
  );
}
