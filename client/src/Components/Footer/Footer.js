import React from 'react';
import '../Footer/Footer.css';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="column">
          <div className="logo">
             <img src="../assets/Imagenes/logonegro.png" height="60px" alt="Factoria F5" /> 
          </div>
          <p>Somos y Factoria F5</p>
          <p>Calle Fernando Poo 25</p>
          <p>Madrid, 28045</p>
        </div>
        <div className="column">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="https://www.factoriaf5.org/somos" target="_blank">Factoria F5</Nav.Link>
          <Nav.Link href="https://www.somosf5.org/about" target="_blank">Somos F5</Nav.Link>
          <Nav.Link href="/Contact">Contacto</Nav.Link>
        </div>
        <div className="column">
          <div className="logo">
            <img src="../assets/logonaranja.png" href="/" height="60px" alt="Segundo Logo" />
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
 





