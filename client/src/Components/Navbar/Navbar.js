import React, { useState } from 'react';
import './Navbar.css';
import '../../routes/InmersiveExpe'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="Home" href="/Home"></div>
        <div className="Inmersiva" href="/Home/Inmersiva"></div>
        <div className="NosotrosF5" href="/Nosotros"></div>
        <div className="Contáctanos" href="/Contacto"></div>
      </div>
      <div className="container">
        <div className="logo">
          <img src="../assets/logonegro.png" alt="Logo" />
        </div>
        <div className="Home" href="/Home">
          <p>Home</p>
        </div>
        <div className="NosotrosF5" href="/Nosotros">
          <p>Nosotros F5</p>
        </div>
        <div className="Contáctanos" href="/Contacto">
          <p>Contáctanos</p>
        </div>
      </div>
    </nav>
 
    </div>
   
  );
}

export default Navbar;