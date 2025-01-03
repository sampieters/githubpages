import React from 'react';
import './Dock.css';

import email from '../../src/static/mail.png'
import facebook from '../../src/static/facebook.png'
import instagram from '../../src/static/instagram.png'
import linkedin from '../../src/static/linkedin.png'
import github from '../../src/static/github.png'
import uantwerpen from '../../src/static/uantwerpen.png'

export default function Dock() {
  return (
    <div className="dock">
        <a href="mailto:sampieters1236@icloud.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Mail" className="dock-icon" />
        </a>
        <a href="https://www.facebook.com/sam.pieters.77" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="dock-icon" />
        </a>
        <a href="https://www.instagram.com/sam_pieters/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="dock-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sam-pieters-462435288/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="dock-icon" />
        </a>
        <a href="https://github.com/sampieters" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github" className="dock-icon" />
        </a>
        <a href="https://www.uantwerpen.be/nl/personeel/sam-pieters_27314/" target="_blank" rel="noopener noreferrer">
            <img src={uantwerpen} alt="UAntwerpen" className="dock-icon" />
        </a>
    </div>
  );
}