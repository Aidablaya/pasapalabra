import React, { useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Rosco = () => {
    const [letterStates, setLetterStates] = useState(
        letters.reduce((acc, letter) => {
          acc[letter] = 'blue'; // Empezamos con azul
          return acc;
        }, {})
      );

      const handleLetterClick = (letter) => {
        setLetterStates((prevStates) => ({
          ...prevStates,
          [letter]: prevStates[letter] === 'blue' 
            ? 'green' 
            : prevStates[letter] === 'green' 
            ? 'red' 
            : 'blue',
        }));
      };

  return (
    <div className="relative z-10 w-[40px] h-[230px] mx-auto mt-8">
      {letters.map((letter, index) => {
        const angle = (index / letters.length) * 360 + 270;
        return (
          <div
            key={letter}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
            }}
          >
            {/* Círculo verde */}
            <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
              {/* Letra con hover */}
              <button
                onClick={() => handleLetterClick(letter)}
                className={`w-10 h-10 rounded-full text-white text-xl font-bold transition-colors duration-300`}
                style={{ backgroundColor: letterStates[letter] }}
              >
                {letter}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rosco;

