import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function PlayerForm({ onSubmit, player }) {
  return (
    <div className={`${styles.blockField} ${player ? styles.hidden : ''}`}>
      <form className={styles.playerForm} onSubmit={onSubmit}>
        <label className={styles.formItem}>
          <div>First Name</div>
          <input type="text" />
        </label>
        <label className={styles.formItem}>
          <div>Last Name</div>
          <input type="text" id="lastName" />
        </label>
        <label className={styles.formItem}>
          <div>Email</div>
          <input type="email" id="email" />
        </label>
        <input type="submit" value="ok" className={styles.formButton} />
      </form>
    </div>
  );
}

PlayerForm.propTypes = {
  player: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default React.memo(PlayerForm);
