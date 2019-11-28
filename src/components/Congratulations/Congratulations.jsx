import React, { useEffect } from 'react';

import styles from './styles.module.css';
import timeConverter from '../Timer/timeConverter'

export default function Congratulations({ stopTimer, time }) {
  useEffect(
    () => {
      stopTimer();
    }, [],
  );

  return (
    <div className={styles.container}>
      <div className={styles.congratulations} >Congratulations!</div>
      <div className={styles.result} >{`Your time is ${timeConverter(time)}`} </div>
    </div>
  );
}
