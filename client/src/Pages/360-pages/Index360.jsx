import React, { useState } from 'react'
import '../360-pages/index360.css';

const Index360 = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div>

<section>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container" id="navcolaps">
      <img
                src="./SomosF5.svg"
                height="50px"
                width="50px"
                alt="logo"
              />        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
            <li className="nav-item">
              
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                <strong>Home</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/StreetPage"
                data-src="/escena360-Aframe/Componentes/street.html"
              >
                StreetView📌
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/IndexPage"
                data-src="/escena360-Aframe/Componentes/Recepcion.html"
              >
                Recepción👋
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/OficinaPage"
                data-src="/escena360-Aframe/Componentes/Oficina.html"
              >
                Oficina⚠️
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/EstanciaCocinaPage"
                data-src="/escena360-Aframe/Componentes/EstanciaCocina.html"
              >
                EstanciaCocina🥪
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Salon1Page"
                data-src="/escena360-Aframe/Componentes/Salon1.html"
              >
                Salon Clase #1👾
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Salon2Page"
                data-src="/escena360-Aframe/Componentes/salon2.html"
              >
                Salon Clase #2🦆
              </a>
            </li>
            <li className="nav-item dropdown">
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </section>
  

  </div>
  );
}

export default Index360