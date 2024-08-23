import React from 'react';
import Marta1 from '../assets/1.png';
import Marta2 from '../assets/2.png';
import Marta3 from '../assets/3.png';
import Marta4 from '../assets/4.png';
import Marta5 from '../assets/5.png';
import Marta6 from '../assets/6.png';
import Marta7 from '../assets/7.png';
import Marta8 from '../assets/8.png';
import Marta9 from '../assets/9.png';

const Images = ({ time }) => {
  const getImageForTime = (time) => {
    if (time === 0) return null; // No mostrar ninguna imagen si el tiempo es 0

    const timeInMinutes = Math.floor(time / 60);

    switch (timeInMinutes) {
      case 0:
        return time % 60 < 10 ? Marta1 : null; // Show for 10 seconds
      case 1:
        return time % 60 < 20 ? Marta2 : null; // Show for 20 seconds
      case 2:
        return time % 60 < 30 ? Marta3 : null; // Show for 30 seconds
      case 3:
        return time % 60 < 40 ? Marta6 : null; // Show for 40 seconds
      case 4:
        return time % 60 < 50 ? Marta5 : null; // Show for 50 seconds
      case 5:
        return time % 60 < 60 ? Marta4 : null; // Show for 60 seconds
      case 6:
        return time % 60 < 70 ? Marta7 : null; // Show for 70 seconds
      case 7:
        return time % 60 < 80 ? Marta8 : null; // Show for 80 seconds
      case 8:
        return time % 60 < 90 ? Marta9 : null; // Show for 90 seconds
      default:
        return null; // No image after 9 minutes
    }
  };

  const imageSrc = getImageForTime(time);

  return (
    <div className="absolute mt-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
      {imageSrc && (
        <img src={imageSrc} alt="Dynamic" className="w-64 h-64 object-cover rounded-lg" />
      )}
    </div>
  );
};

export default Images;
