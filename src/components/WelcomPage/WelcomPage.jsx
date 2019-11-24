import React from 'react';

import styles from './styles.module.css';
import StartButton from '../StartButton';


export default function WelcomPage() {
  return (
    <div
      className={styles.container}
    >
      <StartButton />
      <h1>
        memory game
      </h1>
    </div>
  );
}
