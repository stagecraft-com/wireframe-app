// src/App.js
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Logo from './components/Logo';
import AboutPopup from './components/AboutPopup';
import './App.css';

function App() {
  const [isAboutPopupVisible, setAboutPopupVisible] = useState(false);

  const handleAboutClick = () => {
    setAboutPopupVisible(true);
  };

  const handleClosePopup = () => {
    setAboutPopupVisible(false);
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Run useEffect to handle the logo animation
  useEffect(() => {
    const logo = document.getElementById('logo');

    // Fade in
    logo.style.opacity = 1;

    // Remain visible for 1 second
    setTimeout(() => {
      // Fade out
      logo.style.transition = 'opacity 3s ease-in-out';
      logo.style.opacity = 0;
    }, 3000); // 2 seconds fade-in + 1 second delay
  }, []);

  return (
    <div className="App">
      <Nav onAboutClick={handleAboutClick} onFullScreenToggle={handleFullScreenToggle} />
      <Logo />
      <AboutPopup isVisible={isAboutPopupVisible} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
