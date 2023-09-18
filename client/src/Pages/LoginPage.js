import React from 'react'
import Header from '../Components/header/Header';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Logo/Logo';
import { useState } from 'react';
import "./Login.css";


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    try {
      const response = await fetch('https://factoriaei.coderf5.es/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        localStorage.setItem('token', token);

        window.location.href = '/';
      } else {
        const data = await response.json();

        if (data.message === 'invalid_credentials') {
          setError('Credenciales incorrectas. Por favor, verifica tus datos.');
        } else if (data.message === 'email_not_verified') {
          setError('Correo no verificado. Por favor, verifica tu correo electrónico.');
        } else {
          setError('Hubo un error en el inicio de sesión. Por favor, inténtalo de nuevo más tarde.');
        }
      }
    } catch (error) {
      setError('Hubo un error al conectarse al servidor. Por favor, inténtalo de nuevo más tarde.');
      console.error('Error:', error);
    }
  };
  return (
    <>
        <Header />
        <Logo />
        <div className='contenedor-login'>
          <h2 className='h2-login'>Iniciar Sesión</h2>
          <form className='input-contenedor-login' onSubmit={handleSubmit}>
              <label className='label-text-login' htmlFor="email">Email:</label> <br></br>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Escribe tu email"
                className='input-login'
              />  <br></br>
              <label className='label-text-login' htmlFor="password">Contraseña:</label> <br></br>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Escribe tu contraseña"
                className='input-login'

              /> <br></br>
            <button className='button-login' type="submit" id="sesion" >Iniciar sesión</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
    
          </form>
        </div>
        <Footer />
    </>
  )
}

export default LoginPage