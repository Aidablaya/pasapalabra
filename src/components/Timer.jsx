import React, { useState, useEffect } from 'react';

const Timer = ({ initialMinutes = 6, onTimeUp, onTimeChange }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const totalSeconds = initialMinutes * 60;

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime >= totalSeconds) {
            clearInterval(interval);
            onTimeUp();
            return totalSeconds;
          }
          const newTime = prevTime + 1;
          onTimeChange(newTime);
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, onTimeUp, onTimeChange]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleAddTime = () => {
    const newTime = time + 30; // Aumenta el tiempo en 30 segundos
    setTime(Math.min(newTime, totalSeconds));
    onTimeChange(Math.min(newTime, totalSeconds));
  };

  const handleSubtractTime = () => {
    const newTime = time - 30 > 0 ? time - 30 : 0; // Reduce el tiempo en 30 segundos, asegurando que no baje de 0
    setTime(newTime);
    onTimeChange(newTime);
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
      <div className="mt-4">
        <button
          onClick={handleAddTime}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2"
        >
          +30s
        </button>
        <button
          onClick={handleSubtractTime}
          className="px-4 py-2 bg-red-500 text-white rounded-lg mx-2"
        >
          -30s
        </button>
      </div>
    </div>
  );
};

export default Timer;
