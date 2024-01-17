//Create a stopwatch component with start, pause and reset functionality

import React, { useState, useEffect } from 'react';
export const Stopwatch = () => {
    const [time, setTime] = useState({
        hrs: 12,
        min: 59,
        sec: 45,
    });
    const [shouldStart, setShouldStart] = useState(false);

    useEffect(() => {
        console.log({ shouldStart });
        if (shouldStart) {
            const timer = setTimeout(() => {
                increment();
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [time.sec, shouldStart]);

    const increment = () => {
        setTime((prevTime) => {
            console.log(prevTime);
            const { hrs, min, sec } = prevTime;
            return {
                sec: sec === 59 ? 0 : sec + 1,
                min: sec === 59 ? (min === 59 ? 0 : min + 1) : min,
                hrs: sec === 59 && min === 59 ? hrs + 1 : hrs,
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
                {time.hrs < 10 ? `0${time.hrs}` : time.hrs} :{' '}
                {time.min < 10 ? `0${time.min}` : time.min} :{' '}
                {time.sec < 10 ? `0${time.sec}` : time.sec}
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setShouldStart(true);
                    }}
                >
                    {' '}
                    Start{' '}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setShouldStart(false);
                    }}
                    disabled={!shouldStart}
                >
                    {' '}
                    Pause{' '}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setTime({
                            hrs: 0,
                            min: 0,
                            sec: 0,
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
