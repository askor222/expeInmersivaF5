import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inmersive from './components/Inmersive.js';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/inmersive' element={<Inmersive />} >Inmersive</Route>
     </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
