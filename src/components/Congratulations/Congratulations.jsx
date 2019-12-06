import React from 'react';

import './styles.css';

export default function Congratulations({ result }) {
  return (
    <div className="congratulationsContainer">
      <div className="pyro">
        <div className="before" />
        <div className="after" />
      </div>
      <div className="congratulations">Congratulations!</div>
      <div className="gameResult">
        Your time is
        <span className="resultTime">{ result }</span>
      </div>
    </div>
  );
}
