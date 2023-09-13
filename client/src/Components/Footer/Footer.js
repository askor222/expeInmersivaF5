import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="column">
          <div className="logo">
             <img src="../assets/Imagenes/logonegro.png" height="60px" alt="Factoria F5" /> 
          </div>
          <p>Somos Fundación F5</p>
          <p>Calle Fernando Poo 25</p>
          <p>Madrid, 28045</p>
        </div>
        <div className="column">
          <p href="#">Home</p>
          <p>Somos F5</p>
          <p>Factoria F5</p>
          <p>Contáctanos</p>
        </div>
        <div className="column">
          <div className="logo">
            <img src="../assets/logonaranja.png" href="#" height="60px" alt="Segundo Logo" />
          </div>
          <div className="redes-sociales">
            <a href="/"><img src="../assets/union.png" alt="Facebook" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 





