import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import Logo from '../../Components/Logo';
import './Contact.css';
import Contact1 from "../../Components/Contact";

import backgroundImage from '../../assets/backgroun.jpg';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='login-box-container'>
          <div className='login-box'>
            <Contact1 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact