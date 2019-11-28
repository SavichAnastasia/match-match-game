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
        {/* <div className={`${styles.error} ${player ? '' : styles.active}`}>Fill the form</div> */}
        <div className={styles.formItem}>
          <label htmlFor="fistName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <input type="submit" value="ok" className={styles.formButton} />
      </form>
    </div>
  );
}
