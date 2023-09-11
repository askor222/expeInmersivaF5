import React, { useState } from 'react';
import BurguerButton from './BurguerButton';
import '../header/Header.css';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="NavContainer">
        <div className={`logo ${clicked ? 'active' : ''}`}>
          <img src="../..//assets/SomosF5_naranja.svg" alt="Logo" />
        </div>
        <div className={`links ${clicked ? 'active' : ''}`} style={{ width: clicked ? '100%' : '0' }}>
          <a onClick={handleClick} href="/">Home</a>
          <a onClick={handleClick} href="/SobreF5">Sobre F5</a>
          <a onClick={handleClick} href="#h">Contáctanos</a>
          <a onClick={handleClick} href="#h">Experiencia360</a>
        </div>
        <div className={`links-right ${clicked ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/SobreF5">Sobre F5</a>
          <a href="#h">Contáctanos</a>
          <a href="#h">Experiencia360</a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`bgDiv ${clicked ? 'active' : ''}`}></div>
      </div>
    </>
  );
}

export default Navbar;




