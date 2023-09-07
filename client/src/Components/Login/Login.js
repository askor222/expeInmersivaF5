import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Login.css';




function Login() {
  return (
    <div>
      <Navbar />
   
      <div>
      <Logo/>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
