import React from 'react'
import "./css/register-confirmation.css"

const RegisterConfirmation = () => {
  return (
    <div className='contenedor-r2'>
        <h1 className='font1'>Gracias por registrarte en <strong>F5</strong> </h1>
        <h3 className='font2'> Te hemos enviado un correo electrónico de confirmación, por favor verifica el correo antes de iniciar sesión</h3>
        <a href="/login" className='p-register'>Quiero iniciar sesión</a>
    </div>
  )
}

export default RegisterConfirmation