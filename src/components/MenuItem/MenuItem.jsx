import React from 'react';

import styles from './styles.module.css';

export default function MenuItem({
  name, children, onClick,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.menuItemContainer} onClick={onClick} data-name={name}>
          <div className={styles.menuItem}>
            {name}
          </div>
        </div>
        { children }
      </div>
    </div>
  );
}
