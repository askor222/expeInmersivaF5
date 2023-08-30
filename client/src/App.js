import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InmersiveExpe from './routes/InmersiveExpe';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<InmersiveExpe />} > </Route>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
