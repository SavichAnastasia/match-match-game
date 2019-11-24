import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export default function BackButton({ onClick }) {
  return (
    <Link to="/">
      <button onClick={onClick} className={styles.button}>
        Back
      </button>
    </Link>
  );
}
