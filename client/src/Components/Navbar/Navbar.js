import React, { useState } from 'react';
import './Navbar.css';

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
          <img src="../assets/Imagenes/logonegro.png" alt="Logo" />
        </div>
        <div className="column">
          <a className='a-header'  href="/register">Register</a>
        </div>
        <div className="column">
          <a className='a-header'  href="/login">Login</a>
        </div>
        <div className="column">
          <a className='a-header'  href="/Inmersive">Experiencia Inmersiva</a>
        </div>
        <div className="column">
          <a className='a-header'  href="/Experience360" target="_blank">Experiencia 360</a>
        </div>
        <div className="column">
          <a className='a-header'  href="/contact">Contáctanos</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;