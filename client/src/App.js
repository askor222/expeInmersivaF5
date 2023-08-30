import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InmersiveExpe from './components/Inmersive';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/inmersiveExpe' element={<InmersiveExpe />} > </Route>
     </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
