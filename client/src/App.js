import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InmersiveExpe from '../src/routes/InmersiveExpe';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';


import './App.css'

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
    <Router>
      <Routes>     
          <Route exact path="/" element={<Home/>} />       
          <Route exact path="/Register" element={<Register/>} />       
          <Route exact path="/Login" element={<Login/>} />       
          <Route exact path="/Contact" element={<Contact/>} />       

      </Routes>
    </Router>
  )
}

export default App