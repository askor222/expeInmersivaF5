import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
// import './Login.css';
import Header from '../header/Header';
import Logo from "../Logo/Logo";
import Boton from '../Boton360/Boton';

const Home = () => {
    return (
        <>
          <Header />
          <Logo/>
          <div><Boton/></div>
          <Footer />
        </>
      );
}

export default Home