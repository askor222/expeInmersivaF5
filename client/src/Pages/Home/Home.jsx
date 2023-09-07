import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import Logo from '../../Components/Logo';
import './Login.css';
import './Home.css';
import Login1 from "../../Components/Login";

import backgroundImage from '../../assets/backgroun.jpg';


const Home = () => {
    return (
        <div>
          <Navbar />
          <div
            className="background-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
          </div>
          <h2 className='boton1'>boton 1</h2>
          <h2 className='boton1'>boton 2</h2>
          <Footer />
        </div>
      );
}

export default Home