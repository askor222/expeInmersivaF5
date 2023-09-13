import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Login.css';
import Header from '../header/Header';
import Logo from "../Logo/Logo";
import Boton from '../Boton360/Boton';
import Contact from '../Contact/Contact'

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBoxClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
        <>
          <Header />
         
          <Logo/>
          <div><Boton/></div>
          <Footer />

          <Modal show={showModal} onHide={handleCloseModal} id="modal-content">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Contact />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="light" onClick={handleCloseModal}>
            <strong>Cerrar</strong>
          </Button>
        </Modal.Footer>
      </Modal>
        </>
      );
}

export default Home;