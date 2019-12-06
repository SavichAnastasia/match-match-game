import React from 'react';

import styles from './styles.module.css';

export default function Top10Popup({ name }) {
  return (
    <div className={styles.popupContainer}>
      <h4>{name}</h4>

    </div>
  );
}
