import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  // Function to format time
  const formatTime = (date) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('en-US', options);
  };

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="mac-navbar">
      <div className="mac-navbar-left">
        <span className="mac-icon">&#63743;</span> {/* Apple icon */}
        <ul className="mac-navbar-menu">
          <li><b>Finder</b></li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="mac-navbar-right">
        <ul className="mac-navbar-icons">
        </ul>
        <span className="mac-navbar-time">{currentTime}</span>
      </div>
    </div>
  );
}
