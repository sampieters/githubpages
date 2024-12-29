import React from 'react';
import './Dock.css';

export default function Dock() {
  return (
    <div className="dock">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="facebook-icon.png" alt="Facebook" className="dock-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="instagram-icon.png" alt="Instagram" className="dock-icon" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="linkedin-icon.png" alt="LinkedIn" className="dock-icon" />
      </a>
    </div>
  );
}