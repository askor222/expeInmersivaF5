import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import Logo from '../../Components/Logo';
import './Login.css';
import Login1 from "../../Components/Login";

import backgroundImage from '../../assets/backgroun.jpg';

function Login() {
  return (
    <div>
      <Navbar />
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='login-box-container'>
          <div className='login-box'>
            <Login1 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
