import React, { useEffect } from 'react';

export default function Congratulations({ stopTimer, time }) {
  useEffect(
    () => {
      stopTimer();
    }, [],
  );

  return (
    <div>
      {`Congratulations! ${time}`}
    </div>
  );
}
