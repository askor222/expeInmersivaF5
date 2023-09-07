import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import Logo from '../../Components/Logo';
import './Register.css';
import Login1 from "../../Components/Login";
import Register1 from "../../Components/Register"

import backgroundImage from '../../assets/backgroun.jpg';

const Register = () => {
  return (
    <div>
      <Navbar />
        <div
            className="background-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='espacio-arriva'></div>


            <div className='login-box-container'>
                <div className='login-box-register'>
                    <Register1 />
                </div>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default Register