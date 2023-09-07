import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import './Contact.css';
import Contact1 from "../components/Contact";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <div
      
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