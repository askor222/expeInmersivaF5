import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InmersiveExpe from '../src/routes/InmersiveExpe.js';


function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<InmersiveExpe />} > </Route>
     </Routes>
    </>
  );
}

export default App;
