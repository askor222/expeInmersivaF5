import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import './Register.css';
import Login1 from "../components/Login";
import Register1 from "../components/Register"

const Register = () => {
  return (
    <div>
      <Navbar />
            <div className='login-box-container'>
                    <Register1 />
            </div>
      <Footer />
    </div>
  )
}

export default Register