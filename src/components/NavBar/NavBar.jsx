import React, { useState, useEffect } from "react";
import "./NavBar.css";
import LogoWL from "./LogoWL/LogoWL";
import MyMenu from "./MyMenu/MyMenu";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenus = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${scrolled ? 'scrolled' : ''}`}>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenus}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <button className='close-button' onClick={toggleMenus}>
          <svg className='btn-link' width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label='Button Menu'>
            <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/>
          </svg>
        </button>
        <LogoWL/>
        <MyMenu toggleMenu={toggleMenus} />
       
      </nav>
    </header>
  );
}

export default NavBar;
