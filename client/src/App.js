import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InmersiveExpe from '../src/routes/InmersiveExpe.js';


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RegisterConfirmation from './Components/components/RegisterConfirmation';
import Contact from './Components/Contact/Contact';
import ContactConfirmation from './Components/components/ContactConfirmation';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<InmersiveExpe />} > </Route>
     </Routes>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />} > </Route>
        <Route path='/login' element={<Login />} > </Route>
        <Route path='/register' element={<Register />} > </Route>
        <Route path='/RegisterConfirmation' element={<RegisterConfirmation />} > </Route>
        <Route path='/ContactConfirmation' element={<ContactConfirmation />} > </Route>
        <Route path='/Contact' element={<Contact />} > </Route>
        
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;