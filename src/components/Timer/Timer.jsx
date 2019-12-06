import React, { useEffect } from 'react';

import styles from './styles.module.css';
import timeConverter from './timeConverter';

export default function Timer({ time, startTimer, stopTimer }) {
  useEffect(
    () => {
      startTimer();

      return stopTimer;
    }, [],
  );

  const minutes = Math.floor(time / 60);

  const renderTimeIsOver = () => {
    stopTimer();
    return <div className={styles.timeIsOver}>Time is over</div>;
  };

  return (
    <div className={styles.timer}>
      { minutes >= 60
        ? renderTimeIsOver()
        : timeConverter(time) }
    </div>
  );
}
