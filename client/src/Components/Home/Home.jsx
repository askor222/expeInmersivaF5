import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Login.css';
import Login1 from "../components/Login";

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
          <Footer />
        </div>
      );
}

export default Home