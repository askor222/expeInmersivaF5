import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InmersiveExpe from './routes/InmersiveExpe';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<InmersiveExpe />} > </Route>
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;

