import React from 'react';
import './Dock.css';

import facebook from '../../src/static/facebook.png'
import instagram from '../../src/static/instagram.png'
import linkedin from '../../src/static/linkedin.png'


export default function Dock() {
  return (
    <div className="dock">
      <a href="https://www.facebook.com/sam.pieters.77" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="LinkedIn" className="dock-icon" />
      </a>
      <a href="https://www.instagram.com/sam_pieters/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="LinkedIn" className="dock-icon" />
      </a>
      <a href="https://www.linkedin.com/in/sam-pieters-462435288/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="dock-icon" />
      </a>
    </div>
  );
}