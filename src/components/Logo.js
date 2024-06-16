// src/components/Logo.js
import React, { useEffect, useState } from 'react';
import './Logo.css';

const Logo = () => {
  const [logoSrc, setLogoSrc] = useState('');

  useEffect(() => {
    // Randomly select a logo
    const logos = ['Logo1.jpg', 'Logo2.jpg', 'Logo3.jpg', 'Logo4.jpg', 'Logo5.jpg', 'Logo6.jpg'];
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    setLogoSrc(randomLogo);

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
    <div className="logo-container">
      <img id="logo" src={process.env.PUBLIC_URL + '/' + logoSrc} alt="3D Logo" />
    </div>
  );
};

export default Logo;
