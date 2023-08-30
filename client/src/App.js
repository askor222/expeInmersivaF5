import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inmersive from './components/Inmersive';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/Inmersive' element={<Inmersive />} > </Route>
     </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
