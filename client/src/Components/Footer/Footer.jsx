import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="column">
          <div className="logo">
            <img
              src="../assets/Imagenes/logonegro.png"
              height="60px"
              alt="Factoria F5"
            />
          </div>
          <p className='footer-p'>Somos Fundación F5</p>
          <p className='footer-p'>Calle Fernando Poo 25</p>
          <p className='footer-p'>Madrid, 28045</p>
        </div>
        <div className="column">
          <p className='footer-p'>Home</p>
          <p className='footer-p'>Somos F5</p>
          <p className='footer-p'>Contáctanos</p>
        </div>
        <div className="column">
          <div className="logo">
            <img
              src="../assets/logonaranja.png"
              height="60px"
              alt="Segundo Logo"
            />
          </div>
          <div className="redes-sociales">
            <a href="/">
              <img src="../assets/union.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
