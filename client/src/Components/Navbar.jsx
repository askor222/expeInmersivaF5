import React, { useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="Home"></div>
        <div className="Somos f5"></div>
        <div className="Contáctanos"></div>
      </div>
      <div className="container">
        <div className="logo">
          <a className='a-header'  href="/">Home</a>
        </div>
        <div className="column">
          <a className='a-header'  href="/register">Register</a>
        </div>
        <div className="column">
          <a className='a-header'  href="/login">Login</a>
        </div>
        <div className="column">
          <a className='a-header'  href="/contact">Contáctanos</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;