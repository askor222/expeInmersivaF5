import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';import '../header/Header.css';

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="NavContainer">
      <div className={`logo ${clicked ? 'active' : ''}`}>
          <img src="../..//assets/SomosF5_naranja.svg" alt="Logo" />
        </div>
        <Navbar.Brand href="/">F5</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navcolaps">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Inmersive"><strong>Inmersiva</strong></Nav.Link>
            <Nav.Link href="/IndexPage">Experiencia360</Nav.Link>
            <NavDropdown title="Sobre F5" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.factoriaf5.org/somos" target="_blank">Factoria F5</NavDropdown.Item>
              <NavDropdown.Item href="https://www.somosf5.org/about" target="_blank">
                Somos F5
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/Contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default Header;




