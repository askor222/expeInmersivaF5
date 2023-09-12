import React from 'react';
import { useState } from 'react';
import './Contactanos.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/Contact/Contact';

const Contactanos = () => {

    return (
        <>
            <Header/>
            <div className='papa'>
                <img className='logo-grande' src="./assets/SomosF5.svg" alt="Logo" />
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}

export default Contactanos