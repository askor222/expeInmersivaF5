import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import './Register.css';

import Register1 from "../components/Register"

const Register = () => {
  return (
    <div>
      <Navbar />
        <div>
          
            
        <div className='espacio-arriva'>

        </div>


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