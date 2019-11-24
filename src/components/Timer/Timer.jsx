import React, { useEffect } from 'react';

import styles from './styles.module.css';

export default function Timer({ time, startTimer, stopTimer }) {
  useEffect(
    () => {
      startTimer();
    }, [],
  );

  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time % 60);

  return (
    <div className={styles.timer}>
      { minutes >= 60 ? (() => { stopTimer(); return <div className={styles.timeIsOver}>Time is over</div>; })() : ` ${minutes} : ${seconds}` }
    </div>
  );
}
