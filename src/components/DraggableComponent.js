import React, { useState } from "react";
import Draggable from "react-draggable";
import "./DraggableComponent.css";

import map from '../../src/static/map.png'


export default function DraggableComponent({ type, content, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openWindow = () => setIsOpen(true);
  const closeWindow = () => setIsOpen(false);

  return (
    <>
      {/* Draggable Wrapper */}
      <div className="draggable-container" onDoubleClick={openWindow}>
        <img src={map} alt="Map" className="map-preview" />
        <div className="draggable-header">{title}</div>
      </div>

      {/* Modal Window */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeWindow}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeWindow}>
              ✖
            </button>
            {type === "map" && (
              <div>
                hello
              </div>
            )}
            {type === "file" && (
              <div className="modal-file">
                <h2>{title}</h2>
                <p>{content}</p>
              </div>
            )}
          </div>
        </div>
      )}

    </>
  );
}
