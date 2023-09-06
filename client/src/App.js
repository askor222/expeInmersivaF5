import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InmersiveExpe from '../src/routes/InmersiveExpe';



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
