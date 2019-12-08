import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function RulesPopup({ name }) {
  return (
    <div className={styles.popupContainer}>
      <h4>{name}</h4>
      <ol>
        <li>Turn over any two cards.</li>
        <li>If the two cards match, you should go again</li>
        <li>Remember what was on each card and where it was.</li>
        <li>The game is over when all the cards have been matched.</li>
        <li>You can watch the high score table.</li>
      </ol>
    </div>
  );
}

RulesPopup.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(RulesPopup);
