import React from 'react'
import { useState } from 'react';
import './Contact.css';

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
            <a-scene>

                <a-sky src="https://cdn.glitch.global/860cdd0a-dc8f-4cf3-9491-eed9e6420fd3/cieloazul.jpg?v=1694541519964"></a-sky>
            </a-scene>
            <div className='contenedor-contact' >

                <h2 className='h2-contact'>
                    <img src="../..//assets/SomosF5_naranja.svg" height="50px" width="50px" alt="Logo" />
                    Contacta con nosotros:</h2>
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
                    <label className='label-text-contact' htmlFor="email">Correo Electrónico:</label><br></br>
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

export default Contact