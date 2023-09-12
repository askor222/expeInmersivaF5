import React from "react";
import './Boton.css';
import Button from 'react-bootstrap/Button';


const Boton = () => {
    
    return (
        <div>
        <Button variant="light" type="button" id="login" class="btn btn-light" href="/Login"><strong>Inicia Sesión</strong></Button >
        <Button variant="light" type="button" id="register" class="btn btn-light" href="/Register"><strong>¡Registrate!</strong></Button >
        </div>
    );
  };

  export default Boton;