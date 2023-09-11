
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SobreF5 from './Pages/SobreF5';


function App() {
  return (
    <>
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