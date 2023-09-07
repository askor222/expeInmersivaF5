import React from 'react'
import "./css/register-confirmation.css"

const ContactConfirmation = () => {
  return (
    <div className='contenedor-r2'>
        <h1 className='font1'>Gracias por contactar con <strong>F5</strong> </h1>
        <h3 className='font2'> Te hemos enviado un correo electrónico confirmando que hemos recibido el correo</h3>
        <a href="/contact" className='p-register'>Enviar un nuevo mensaje</a>

    </div>
  )
}

export default ContactConfirmation