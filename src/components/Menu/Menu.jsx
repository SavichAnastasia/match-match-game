import React from 'react';

import styles from './styles.module.css';
import MenuItem from '../MenuItem';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <MenuItem>
        Game difficulty
      </MenuItem>
      <MenuItem>
        Card shirt
      </MenuItem>
      <MenuItem>
        Rules
      </MenuItem>
    </div>
  );
}
