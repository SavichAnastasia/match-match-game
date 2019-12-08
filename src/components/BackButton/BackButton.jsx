import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

function BackButton({ onClick }) {
  return (
    <Link to="/">
      <button type="button" onClick={onClick} className={styles.button}>
        Back
      </button>
    </Link>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default React.memo(BackButton);
