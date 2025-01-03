import React, { useState } from "react";
import "./DraggableComponent.css";

import map from '../../src/static/map.png'
import file from '../../src/static/file.png'


export default function DraggableComponent({ type, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openWindow = () => setIsOpen(true);
  const closeWindow = () => setIsOpen(false);

  return (
    <>
      {/* Draggable Wrapper */}
      <div className="draggable-container" onDoubleClick={openWindow}>
        {type === "map" && 
          <img src={map} alt="Map" className="map-preview" />
        }
        { type === "file" &&
          <img src={file} alt="File" className="map-preview" />

        }
        <div className="draggable-header">{title}</div>
      </div>

      {/* Modal Window */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeWindow}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="mac-buttons">
                <span className="mac-button red" onClick={closeWindow}></span>
                <span className="mac-button yellow"></span>
                <span className="mac-button green"></span>
              </div>
            </div>
            <div className="modal-body">
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
