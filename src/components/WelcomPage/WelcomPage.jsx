import React from 'react';

import styles from './styles.module.css';
import StartButton from '../StartButton';
import Menu from '../../containers/Menu';


export default function WelcomPage() {
  return (
    <>
      <Menu />
      <div
        className={styles.container}
      >
        <StartButton />
        <h1>
        memory game
      </h1>
      </div>
    </>
  );
}
