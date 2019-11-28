import React, { useEffect } from 'react';

import styles from './styles.module.css';
import timeConverter from './timeConverter';

export default function Timer({ time, startTimer, stopTimer }) {
  useEffect(
    () => {
      startTimer();
    }, [],
  );

  const minutes = Math.floor(time / 60);

  return (
    <div className={styles.timer}>
      { minutes >= 60
        ? (() => { stopTimer(); return <div className={styles.timeIsOver}>Time is over</div>; })()
        : timeConverter(time) }
    </div>
  );
}
