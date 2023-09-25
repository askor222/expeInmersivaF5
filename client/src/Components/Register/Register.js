import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../header/Header';
import './Register.css';
import Login1 from "../components/Login";
import Register1 from "../components/Register"

const Register = () => {
  return (
    <div>
      <Header />
            <div className='login-box-container'>
                    <Register1 />
            </div>
      <Footer />
    </div>
  )
}

export default Register