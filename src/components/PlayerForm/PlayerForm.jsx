import React from 'react';

import styles from './styles.module.css';

export default function PlayerForm({ onSubmit, player }) {
  // const onSubmit = (e) => {
  //   const errorElem = document.querySelector(`.${styles.error}`);
  //   e.preventDefault();
  //   const [firstName, lastName, email] = [...e.currentTarget.elements].map((item) => item.value);
  //   if (firstName && lastName && email) {
  //     errorElem.classList.remove(styles.active);
  //     const memoryGamePlayer = {
  //       firstName,
  //       lastName,
  //       email,
  //     };
  //     localStorage.setItem('memoryGamePlayer', JSON.stringify(memoryGamePlayer));
  //     document.querySelector(`.${styles.blockField}`).classList.add(styles.hidden);
  //     console.log(localStorage.getItem('memoryGamePlayer'));
  //   } else {
  //     errorElem.classList.add(styles.active);
  //   }
  // };

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
