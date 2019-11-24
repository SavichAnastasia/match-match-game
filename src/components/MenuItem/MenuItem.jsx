import React from 'react';

import styles from './styles.module.css';

export default function MenuItem({ children }) {
  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.menuItem}>
        {children}
      </div>
    </div>
  );
}
