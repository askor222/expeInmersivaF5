import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Contact.css';
import Contact1 from "../components/Contact";

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