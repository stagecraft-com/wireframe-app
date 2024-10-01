// src/components/AboutPopup.js
import React, { useState } from 'react';
import './AboutPopup.css';

const AboutPopup = ({ isVisible, onClose }) => {
  const [activeTab, setActiveTab] = useState('general');

  if (!isVisible) return null;

  return (
    <div id="aboutPopup" className="popup">
      <div className="popup-header">
        <span>About Stagecraft</span>
        <span className="close-button" id="closePopup" onClick={onClose}>X</span>
      </div>
      <div className="popup-content">
        <div className="tabs">
          <button
            id="general-tab"
            className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
            data-tab="general"
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button
            id="credits-tab"
            className={`tab-button ${activeTab === 'credits' ? 'active' : ''}`}
            data-tab="credits"
            onClick={() => setActiveTab('credits')}
          >
            Credits
          </button>
        </div>
        <div className={`tab-content ${activeTab === 'general' ? 'active' : 'hidden'}`} id="general">
          <p>Stagecraft.com</p>
          <p>version: 00.00.01</p>
          <p>date: 5/15/2024</p>
        </div>
        <div className={`tab-content ${activeTab === 'credits' ? 'active' : 'hidden'}`} id="credits">
          <div className="library-group">
            <p><a href="https://github.com/mrdoob/three.js" target="_blank" className="library-link">Three.js</a></p>
            <p><a href="https://opensource.org/license/mit" target="_blank" className="license-link">The MIT License</a></p>
          </div>
          <div className="library-group">
            <p><a href="https://github.com/facebook/react" target="_blank" className="library-link">React</a></p>
            <p><a href="https://opensource.org/license/mit" target="_blank" className="license-link">The MIT License</a></p>
          </div>
          <div className="library-group">
            <p><a href="https://github.com/pmndrs/react-three-fiber" target="_blank" className="library-link">React-Three-Fiber</a></p>
            <p><a href="https://opensource.org/license/mit" target="_blank" className="license-link">The MIT License</a></p>
          </div>
          <div className="library-group">
            <p><a href="https://github.com/pmndrs/drei" target="_blank" className="library-link">/drei</a></p>
            <p><a href="https://opensource.org/license/mit" target="_blank" className="license-link">The MIT License</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPopup;
