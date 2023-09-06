import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Login.css';
import Login from './Login';


function LoginReg() {
  return (
    <div>
      <Logo />
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginReg;