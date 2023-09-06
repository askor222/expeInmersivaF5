import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';



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
