import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Experience360/Experience.css';

const Experience360 = () => {
  const [selectedSkyId, setSelectedSkyId] = useState('entrada'); 

  const handleNavClick = (skyId) => {
    setSelectedSkyId(skyId);
  };

  return (
    <div className='body360'>
      <a-scene frustum-culling="true">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => handleNavClick('entrada')}>Recepción👋</Nav.Link>
                <Nav.Link  onClick={() => handleNavClick('street')}>StreetView📌</Nav.Link>
                <Nav.Link  onClick={() => handleNavClick('espacioComedor')}>EstanciaCocina🥪</Nav.Link>
                <Nav.Link  onClick={() => handleNavClick('oficina')}>Oficina⚠️</Nav.Link>
                <Nav.Link  onClick={() => handleNavClick('salon1')}>Salon Clase #1 👾</Nav.Link>
                <Nav.Link  onClick={() => handleNavClick('salon2')}>Salon Clase #2 🦆</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

         <a-sky
          id="entrada"
          rotation="0 -160 0"
          position="100 0 200"
          src={`https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/entrada.JPG?v=1694332717226`}
        ></a-sky>
        <a-sky
          id="street"
          rotation="0 -160 0"
        
          src={`https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/street.JPG?v=1694332717226`}
        ></a-sky>
        <a-sky
          id="espacioComedor"
          rotation="0 -160 0"
          
          src={`https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/espacioComedor.JPG?v=1694332717226`}
        ></a-sky>
        <a-sky
          id="oficina"
          rotation="0 -160 0"
         
          src={`https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/oficina.JPG?v=1694332717226`}
        ></a-sky>
        <a-sky
          id="salon1"
          rotation="0 -160 0"
        
          src={`https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/salon1.JPG?v=1694332717226`}
        ></a-sky>
        <a-sky
          id="salon2"
          rotation="0 -160 0"
         
          src={`https://cdn.glitch.global/5e54b684-756b-413c-8816-13237484939c/salon2.JPG?v=1694332717226`}
        ></a-sky>

    <div>
    <iframe src={`#${selectedSkyId}`} height="1000" width="100%"></iframe>

     <iframe src={`#${street}`} height="1000" width="100%"></iframe>
      
      <iframe src={`#${entrada}`} height="1000" width="100%"></iframe>

      <iframe src={`#${espacioComedor}`} height="1000" width="100%"></iframe>

      <iframe src={`#${oficina}`} height="1000" width="100%"></iframe>

      <iframe src={`#${salon1}`} height="1000" width="100%"></iframe>

      <iframe src={`#${salon2}`} height="1000" width="100%"></iframe>
      </div> 
      </a-scene>

    </div>
  );
}

export default Experience360;