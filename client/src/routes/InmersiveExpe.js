import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Inmersive from '../components/Inmersive/Inmersive';
import LoginReg from '../components/Login/Login.js';
import Login from '../components/Login/Login.jsx';
import Contact from '../components/Contact';
import Inmersive from '../components/Inmersive';



const InmersiveExpe = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<LoginReg />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Home/Inmersiva' element={<Inmersive />}></Route>
          <Route path='/Contacto' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default InmersiveExpe