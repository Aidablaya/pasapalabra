import React, { useState, useEffect } from 'react';

const Timer = ({ initialMinutes = 5, onTimeUp }) => {
  const [time, setTime] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            onTimeUp();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, onTimeUp]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-center text-2xl font-bold">
      <div>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</div>
      <button
        onClick={handleStartStop}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;