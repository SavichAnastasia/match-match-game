import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function MenuItem({
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

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default React.memo(MenuItem);
