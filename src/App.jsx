import React, { useState } from 'react';

import Rosco from './components/Rosco';
import Timer from './components/Timer';


function App() {
  const [time, setTime] = useState(0); // Inicia en 0

  const handleTimeUp = () => {
    alert('¡Se acabó el tiempo!');
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 text-white relative">
      <h1 className="text-4xl font-bold mb-36">Pasalamarta</h1>
      
      <Rosco />
      <Timer initialMinutes={10} onTimeUp={handleTimeUp} onTimeChange={handleTimeChange}/>
      
    </div>
  );
}

export default App;
