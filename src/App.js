// App.js
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
//import Sidebar from './Sidebar';
import Dock from './components/Dock';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };


  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className="dynamic-background" style={{
        backgroundPositionX: `${mousePosition.x / 50}px`,
        backgroundPositionY: `${mousePosition.y / 50}px`,
      }} />
      <Navbar />
      <div className='content'>
        <div className="main-layout">
        </div>
        <Dock />
      </div>
    </div>
  );
}

export default App;