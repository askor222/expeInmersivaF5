import React from 'react'
import { useState } from 'react';
import '../Contact/Contact';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // AquÃ­ puedes realizar la solicitud POST a tu servidor con los datos del formulario
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        };

        fetch('https://factoriaei.coderf5.es//api/message', requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <>
            <div className='contenedor-contact'>
                <h2 className='h2-contact'>Contacta con nosotros</h2>
                <form className='input-contenedor-contact' onSubmit={handleSubmit}>
                    <label className='label-text-contact' htmlFor="name">Nombre:</label><br></br>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='input-contact'
                        placeholder="Escribe tu nombre y apellido"

                    /><br></br>
                    <label className='label-text-contact' htmlFor="Correo electrónico">Correo electrónico:</label><br></br>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='input-contact'
                        placeholder="Escribe tu correo"

                    /><br></br>
                    <label className='label-text-contact' htmlFor="message">Mensaje:</label>  <br></br>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='message-input-contact'
                        placeholder="Escribe el mensaje"

                    /><br></br>
                    <button className='button-contact' type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default Contact;