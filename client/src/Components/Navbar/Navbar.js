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
          <p>Home</p>
        </div>
        <div className="column">
          <p>Somos F5</p>
        </div>
        <div className="column">
          <p>Contáctanos</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;