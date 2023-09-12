import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/header/Header';
import Logo from "../Components/Logo/Logo";
import Boton from '../Components/Boton360/Boton';



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