import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import Logo from "../Logo/Logo";
import Botones from '../Botones/Botones';
import Boton2 from '../Botones/Boton2';

const Home = () => {

    return (
        <>
          <Header />
         
          <Logo/>
          <div id="botones" style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh' }}>
       
            <Botones/>
            <Boton2 />
          </div>
          
          <Footer />
        </>
      );
}

export default Home;
