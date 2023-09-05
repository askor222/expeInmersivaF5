import React from 'react';
import { useState } from 'react';
import "./css/login.css"


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [error, setError] = useState(null); // Estado para manejar errores
    
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
    
        // Realiza una solicitud POST al servidor para iniciar sesión
        try {
          const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Si la solicitud fue exitosa, obtén el token de respuesta
            const data = await response.json();
            const { token } = data;
    
            // Guarda el token en localStorage
            localStorage.setItem('token', token);
    
            // Redirige a la página de inicio o realiza otras acciones necesarias
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
          // Maneja errores de red o del servidor aquí
          setError('Hubo un error al conectarse al servidor. Por favor, inténtalo de nuevo más tarde.');
          console.error('Error:', error);
        }
      };
    
      return (
        <div className='contenedor-login'>
          <h2 className='h2-login'>Login</h2>
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
            <button className='button-login' type="submit">Login</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
    
          </form>
        </div>
      );
}

export default Login