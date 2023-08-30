import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inmersive from './components/Inmersive';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/inmersive' element={<Inmersive />} > </Route>
     </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
