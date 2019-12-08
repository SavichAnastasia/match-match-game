import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';
import timeConverter from './timeConverter';

function Timer({ time, startTimer, stopTimer }) {
  useEffect(
    () => {
      startTimer();

      return stopTimer;
    }, [startTimer, stopTimer],
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

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
};

export default React.memo(Timer);
