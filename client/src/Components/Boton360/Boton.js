import React from "react";
import './Boton.css';
import Button from 'react-bootstrap/Button';


const Boton = () => {
    
    return (
        <div>
        <Button  variant="light" type="button" id="btnlogin" class="btn btn-light" href="/Login"><strong>Inicia Sesión</strong></Button >
        <Button  on variant="light" type="button" id="btnregister" class="btn btn-light" href="/Register"><strong>¡Registrate!</strong></Button >
        </div>
    );
  };

  export default Boton;