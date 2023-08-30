import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inmersive from './routes/InmersiveExpe';

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
