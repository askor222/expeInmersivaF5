import React from 'react'
import { useState } from 'react';
import './css/register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleRegister = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      });
  
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      try {
        const response = await fetch("http://127.0.0.1:8000/api/register", requestOptions);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.log('error', error);
      }
    };
  
    return (
      <div className='contenedor-register'>
        <h2 className='h2-register'>Register</h2>
        <p className='p-register'> ¡Crea tú cuente en <strong>F5</strong>! </p>
        <div className='input-contenedor-register'>
          <label className='label-text-register'>Nombre:</label><br></br>
          <input className='input-register' placeholder="Escribe tu nombre" type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className='input-contenedor-register'>
          <label className='label-text-register'>Email:</label><br></br>
          <input className='input-register' placeholder="Escribe tu correo electrónico" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='input-contenedor-register'>
          <label className='label-text-register'>Password:</label><br></br>
          <input className='input-register' placeholder="Crea una nueva contraseña" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button className='button-register' onClick={handleRegister}>Register</button>
        </div>
      </div>
    );
}

export default Register