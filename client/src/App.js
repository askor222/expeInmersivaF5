import { Route, Routes } from 'react-router-dom';
import Inmersive from './components/Inmersive/Inmersive';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RegisterConfirmation from './components/components/RegisterConfirmation';
import Contact from './components/Contact/Contact';
import ContactConfirmation from './components/components/ContactConfirmation';
import Home from './components/Home/Home';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SobreF5 from './Pages/SobreF5';


function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home />} > </Route>
        <Route path='/login' element={<Login />} > </Route>
        <Route path='/register' element={<Register />} > </Route>
        <Route path='/RegisterConfirmation' element={<RegisterConfirmation />} > </Route>
        <Route path='/ContactConfirmation' element={<ContactConfirmation />} > </Route>
        <Route path='/Contact' element={<Contact />} > </Route>
        <Route path='/Inmersive' element={<Inmersive />} ></Route>
     </Routes>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />} > </Route>
        <Route path='/SobreF5' element={<SobreF5 />} > </Route>
        


        
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;