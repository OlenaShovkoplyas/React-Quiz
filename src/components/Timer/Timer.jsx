// // Временный таймер

import React, { useEffect, useState } from 'react';
import { getPadTime } from '../../constants/getPadTime';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [isCounting, setIsCounting] = useState(false);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    if (timeLeft === 0) setIsCounting(false);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(10 * 60);
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  return (
    <>
      <div>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div>
        {isCounting ? (
          <button
          onClick={handleStop}
          >Stop</button>
        ) : (
          <button
          onClick={handleStart}
          >Start</button>
        )}
      </div>
    </>
  );
}
