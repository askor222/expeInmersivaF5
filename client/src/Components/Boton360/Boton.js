import React from "react";
import './Boton.css';
import Button from 'react-bootstrap/Button';

const Boton = () => {
 
    return (
        <div>
            <div className="log">
                <Button  variant="light" type="button" id="login" class="btn btn-light" href="/login"><strong>Inicia Sesión</strong></Button >
            </div>

            <div className="reg">
                <Button  variant="light" type="button" id="register" class="btn btn-light" href="/register"><strong>¡Registrate!</strong></Button >
            </div>
        </div>
    );
};

export default Boton;