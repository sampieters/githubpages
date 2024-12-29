// App.js
import React from 'react';
import Navbar from './components/Navbar';
//import Sidebar from './Sidebar';
import Content from './components/Content';
import Dock from './components/Dock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-layout">
      </div>
      <Dock />
    </div>
  );
}

export default App;