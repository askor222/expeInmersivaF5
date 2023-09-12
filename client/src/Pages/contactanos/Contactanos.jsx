import React from 'react';
import './Contactanos.css';
import Contact from '../components/Contact/Contact';

const Contactanos = () => {

    return (
        <>
            <Header/>
            <div className='papa'>
                <img className='logo-grande' src="./assets/SomosF5.svg" alt="Logo" />
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default Contactanos