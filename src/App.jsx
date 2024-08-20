import React from 'react';
import Rosco from './components/Rosco';
import Timer from './components/Timer';

function App() {
  const handleTimeUp = () => {
    alert('¡Se acabó el tiempo!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 text-white">
      <h1 className="text-4xl font-bold mb-36">Pasapalabra</h1>
      
      <Rosco />
      <Timer initialMinutes={5} onTimeUp={handleTimeUp} />
    </div>
  );
}

export default App;
