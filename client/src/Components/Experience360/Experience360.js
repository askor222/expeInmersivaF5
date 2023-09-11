import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Experience360 = () => {
  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <div class="logo">

        </div>
        <p><strong>¡Acompañanos a realizar esta visita 360 de nuestra sede F5 Madrid!</strong></p>

        <Navbar.Brand href="https://factoriaei.coderf5.es/Inmersiva">Experiencia Inmersiva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#entrada" data-src="/escena360-Aframe/Componentes/Recepcion.html">Recepción👋</Nav.Link>
            <Nav.Link href="#Street" data-src="/escena360-Aframe/Componentes/street.html">StreetView📌</Nav.Link>
            <Nav.Link href="#Oficina" data-src="/escena360-Aframe/Componentes/Oficina.html">Oficina⚠️</Nav.Link>
            <Nav.Link href="#EstanciaCocina" data-src="/escena360-Aframe/Componentes/EstanciaCocina.html">EstanciaCocina🥪</Nav.Link>
            <Nav.Link href="#Salon1" data-src="/escena360-Aframe/Componentes/Salon1.html">Salon Clase #1 👾</Nav.Link>
            <Nav.Link href="#salon2" data-src="/escena360-Aframe/Componentes/salon2.html">Salon Clase #2 🦆</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  <div back="fondo">
    <iframe id="entrada" src="/escena360-Aframe/Componentes/Recepcion.html" height="1000" width="100%" id="Street"
      src="/escena360-Aframe/Componentes/street.html" height="1000" width="100%" id="Oficina"
      src="/escena360-Aframe/Componentes/Oficina.html" height="1000" width="100%" id="EstanciaCocina"
      src="/escena360-Aframe/Componentes/EstanciaCocina.html" height="1000" width="100%" id="Salon1"
      src="/escena360-Aframe/Componentes/Salon1.html" height="1000" width="100%" id="salon2"
      src="/escena360-Aframe/Componentes/salon2.html" height="1000" width="100%"></iframe>
  </div>

  </div>

  );
}

  
export default Experience360



