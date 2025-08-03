import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => scrollToSection('hero')}>nf</div>
        
        <nav className="nav">
          <button onClick={() => scrollToSection('about')}>about</button>
          <button onClick={() => scrollToSection('experience')}>experience</button>
          <button onClick={() => scrollToSection('contact')}>contact</button>
        </nav>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ≡
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <button onClick={() => scrollToSection('about')}>about</button>
            <button onClick={() => scrollToSection('experience')}>experience</button>
            <button onClick={() => scrollToSection('contact')}>contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;