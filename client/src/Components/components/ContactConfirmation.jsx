import React from 'react'
import "./css/register-confirmation.css"

const ContactConfirmation = () => {
  return (
    <div className='contenedor-r2'>
        <h1 className='font1'>¡Hola, gracias por registrarte en F5!<strong>F5</strong> </h1>
        <h3 className='font2'> Confirma tu correo electrónico haciendo clic en el siguiente enlace:</h3>
        <a href="/contact" className='p-register'>Enviar un nuevo mensaje</a>
    </div>
  )
}

export default ContactConfirmation