import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './components/header/Header';
import Logo from "./components/Logo/Logo";
import Boton from './components/Boton360/Boton';
import './contactanos/Contactanos'

const Home = () => {
    return (
        <>
          <Header />
          <Logo/>
          <div>  <Boton/></div>
          <Footer />
        </>
      );
}

export default Home