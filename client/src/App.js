import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Inmersive from '../src/Components/Inmersive/Inmersive';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Register/Register';
import RegisterConfirmation from '../src/Components/components/RegisterConfirmation';
import Contact from '../src/Components/Contact/Contact';
import ContactConfirmation from './Components/components/ContactConfirmation';
import Home from '../src/Components/Home/Home';
import Index360 from '../src/Pages/360-pages/Index360';
import '../src/Pages/360-pages/StreetPage';
import '../src/Components/Boton360/Boton.js';
import Recepcion from './Pages/360-pages/Pages-aframe/Recepcion';
import Oficina from './Pages/360-pages/Pages-aframe/Oficina';
import Salon1 from './Pages/360-pages/Pages-aframe/Salon1';
import Salon2 from './Pages/360-pages/Pages-aframe/Salon2';
import EstanciaCocina from './Pages/360-pages/Pages-aframe/EstanciaCocina';
import Street from './Pages/360-pages/Pages-aframe/Street';
import IndexPage from './Pages/360-pages/IndexPage';
import EstanciaCocinaPage from './Pages/360-pages/EstanciaCocinaPage';
import Salon1Page from './Pages/360-pages/Salon1Page';
import Salon2Page from './Pages/360-pages/Salon2Page';
import StreetPage from './Pages/360-pages/StreetPage';
import OficinaPage from './Pages/360-pages/OficinaPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div>
    
     <Routes>
        <Route path='/' element={<Home />} >Home</Route>
        <Route path='/login' element={<Login />}>Login</Route>
        <Route path='/register' element={<Register />}>Register</Route>
        <Route path='/RegisterConfirmation' element={<RegisterConfirmation />}>RegisterConfirmation</Route>
        <Route path='/ContactConfirmation' element={<ContactConfirmation />}>ContactConfirmation</Route>
        <Route path='/Inmersive' element={<Inmersive />}>Inmersive</Route>
        <Route path='/Index360' element={<Index360 />}>Index360</Route>
        <Route path='/Contact' element={<Contact />}>Contact</Route>
        <Route path='/login' element={<Login />} >login</Route> 

        <Route path='/Recepcion' element={<Recepcion />}>Recepcion</Route>
        <Route path='/Oficina' element={<Oficina />}>Oficina</Route>
        <Route path='/Salon1' element={<Salon1 />} >Salon1</Route>
        <Route path='/Salon2' element={<Salon2 />}>Salon2</Route>
        <Route path='/EstanciaCocina' element={<EstanciaCocina />}>EstanciaCocina</Route>
        <Route path='/Street' element={<Street />}>Street</Route>
        <Route path='/IndexPage' element={<IndexPage />}>IndexPage</Route>
        <Route path='/EstanciaCocinaPage' element={<EstanciaCocinaPage />}>EstanciaCocinaPage</Route>
        <Route path='/Salon1Page' element={<Salon1Page />}>Salon1Page</Route>
        <Route path='/Salon2Page' element={<Salon2Page />}>Salon2Page</Route>
        <Route path='/StreetPage' element={<StreetPage />}>StreetPage</Route>
        <Route path='/OficinaPage' element={<OficinaPage />}>OficinaPage</Route>
        <Route path='/LoginPage' element={<LoginPage />}>LoginPage</Route>
        <Route path='/RegisterPage' element={<RegisterPage />}>RegisterPage</Route>
     </Routes>
    </div>
  );
}

export default App;