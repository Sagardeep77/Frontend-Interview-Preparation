//Create a stopwatch component with start, pause and reset functionality

import React, { useState, useEffect } from 'react';
export const Stopwatch = () => {
  const [time, setTime] = useState({
    hrs: 12,
    min: 59,
    sec: 45,
    ms: 0,
  });
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (shouldStart) {
      const timer = setTimeout(() => {
        increment();
      }, 10);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [time.ms, shouldStart]);

  const increment = () => {
    setTime(prevTime => {
      const { hrs, min, sec, ms } = prevTime;
      return {
        ms: ms === 99 ? 0 : ms + 1,
        sec: ms === 99 ? (sec === 59 ? 0 : sec + 1) : sec,
        min: ms === 99 ? (sec === 59 ? (min === 59 ? 0 : min + 1) : min) : min,
        hrs: ms === 99 ? (sec === 59 && min === 59 ? hrs + 1 : hrs) : hrs,
      };
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        fontFamily: 'Rubik, sans-serif',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: '50px',
        }}
      >
        {time.hrs < 10 ? `0${time.hrs}` : time.hrs}
        <sub>{` hr`}</sub> : {time.min < 10 ? `0${time.min}` : time.min}
        <sub>{` min`}</sub> : {time.sec < 10 ? `0${time.sec}` : time.sec}
        <sub>{` sec`}</sub> : {time.ms < 10 ? `0${time.ms}` : time.ms}
        <sub>{` ms`}</sub>
      </div>
      <div>
        <button
          type='button'
          onClick={() => {
            setShouldStart(true);
          }}
        >
          {' '}
          Start{' '}
        </button>
        <button
          type='button'
          onClick={() => {
            setShouldStart(false);
          }}
          disabled={!shouldStart}
        >
          {' '}
          Pause{' '}
        </button>
        <button
          type='button'
          onClick={() => {
            setTime({
              hrs: 0,
              min: 0,
              sec: 0,
              ms: 0,
            });
          }}
        >
          {' '}
          Reset{' '}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
