import React from 'react';
import './Sobre-f5.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/header/Header';

const SobreF5 = () => {
  return (
    <>
        <Header />
        <div className='contenedor--sobre-f5'>
          <img src="../assets/blue-block.png" alt="Cuadro izquierdo" />
          <h2 className='title-sobre-f5'>
            En Fundación F5 construimos un mundo tecnológico equitativo y accesible para todas y todos.
          </h2>
          <img src="../assets/blue-block.png" alt="Cuadro derecho" />
        </div>
        <Footer />
    </>
  );
}

export default SobreF5;
