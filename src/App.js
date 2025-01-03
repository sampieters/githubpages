// App.js
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dock from './components/Dock';
import './App.css';
import DraggableComponent from './components/DraggableComponent';
import Resume from './pages/Resume';

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
          <DraggableComponent type="map" title="Projects">
          <div>Work in progress</div>
          </DraggableComponent>
          <DraggableComponent type="map" title="Research">
            <div>Work in progress</div>
          </DraggableComponent>
          <DraggableComponent type="file" title="CV">
            <Resume />
          </DraggableComponent>
        </div>
        <Dock />
      </div>
    </div>
  );
}

export default App;