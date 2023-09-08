import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InmersiveExpe from './src/components/';


function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Inmersive' element={<Inmersive />} > </Route>
          <Route path='/Contacto' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;

