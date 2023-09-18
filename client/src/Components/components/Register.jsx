import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/register.css';

const Register1 = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => { 
    setConfirmPassword(event.target.value);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": name,
      "email": email,
      "password": password
    });

    if (!isValidPassword(password)) { 
      alert("La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un carácter especial.");
      return;
    }

    if (password !== confirmPassword) { 
      alert("Las contraseñas no coinciden. Por favor, verifica tu contraseña.");
      return; 
    }

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://factoriaei.coderf5.es/api/register", requestOptions);
      const result = await response.json();

      if (result.success) {
        window.location.href = "/RegisterConfirmation";
      } else {
        console.log("Hubo un error en el registro.");
      }
    } catch (error) {
      console.log('error', error);
    }
  };


  return (
    <div className='contenedor-register'>
      <h2 className='h2-register'>¡Registrate!</h2>
      <p className='p-register'> ¡Crea tu cuenta en <strong>F5</strong>! </p>
      <div className='input-contenedor-register'>
        <label className='label-text-register'>Nombre:</label><br></br>
        <input className='input-register' placeholder="Escribe tu nombre" type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className='input-contenedor-register'>
        <label className='label-text-register'>Correo Electrónico:</label><br></br>
        <input className='input-register' placeholder="Escribe tu correo electrónico" type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className='input-contenedor-register'>
        <label className='label-text-register'>Contraseña:</label><br></br>
        <input className='input-register' placeholder="Crea una nueva contraseña" type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className='input-contenedor-register'>
        <label className='label-text-register'>Confirmar Contraseña:</label><br></br>
        <input
          className='input-register'
          placeholder="Confirma tu contraseña"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div>
        <button className='button-register' onClick={handleRegister}>Registrarse</button>
      </div>
      <div>
        <p  style={{ display: 'inline-block', marginRight: '20px' }} className='p-register'> ¿Ya tienes cuenta? </p>

        <a href="/Login" className='p-register'>Iniciar Sesión</a>
        </div>

    </div>
  );
}

export default Register1;
