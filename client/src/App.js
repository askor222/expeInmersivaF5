import { Route, Routes } from 'react-router-dom';
import Inmersive from '../src/Components/Inmersive/Inmersive';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Register/Register';
import RegisterConfirmation from '../src/Components/components/RegisterConfirmation';
import Contact from '../src/Components/Contact/Contact';
import ContactConfirmation from './Components/components/ContactConfirmation';
import Home from '../src/Components/Home/Home';
import Index360 from '../src/Pages/360-pages/Index360';
import '../src/Pages/360-pages/StreetPage';
import '../src/Components/Boton360/Boton';
import Home1 from './Pages/Home';
import Contactanos from './Pages/contactanos/Contactanos';
import Recepcion from './Pages/360-pages/Pages-aframe/Recepcion';
import Oficina from './Pages/360-pages/Pages-aframe/Oficina';
import Salon1 from './Pages/360-pages/Pages-aframe/Salon1';
import Salon2 from './Pages/360-pages/Pages-aframe/Salon2';
import EstanciaCocina from './Pages/360-pages/Pages-aframe/EstanciaCocina';
import Street from './Pages/360-pages/Pages-aframe/Street';
import IndexPage from './Pages/360-pages/IndexPage';
import EstanciaCocinaPage from './Pages/360-pages/EstanciaCocinaPage';
import Salon1Page from './Pages/360-pages/Salon1Page';
import Salon2Page from './Pages/360-pages/Salon2Page';
import StreetPage from './Pages/360-pages/StreetPage';
import OficinaPage from './Pages/360-pages/OficinaPage';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home />} > </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/register' element={<Register />} > </Route>
        <Route path='/RegisterConfirmation' element={<RegisterConfirmation />} > </Route>
        <Route path='/ContactConfirmation' element={<ContactConfirmation />} > </Route>
        <Route path='/Inmersive' element={<Inmersive />} ></Route>
        <Route path='/Index360' element={<Index360 />} ></Route>
        <Route path='/Contact' element={<Contact />} > </Route>
        <Route path='/Contactanos' element={<Contactanos />} > </Route> 
        <Route path='/Recepcion' element={<Recepcion />} > </Route>
        <Route path='/Oficina' element={<Oficina />} > </Route>
        <Route path='/Salon1' element={<Salon1 />} > </Route>
        <Route path='/Salon2' element={<Salon2 />} > </Route>
        <Route path='/EstanciaCocina' element={<EstanciaCocina />} > </Route>
        <Route path='/Street' element={<Street />} > </Route>
        <Route path='/IndexPage' element={<IndexPage />} > </Route>
        <Route path='/EstanciaCocinaPage' element={<EstanciaCocinaPage />} > </Route>
        <Route path='/Salon1Page' element={<Salon1Page />} > </Route>
        <Route path='/Salon2Page' element={<Salon2Page />} > </Route>
        <Route path='/StreetPage' element={<StreetPage />} > </Route>
        <Route path='/OficinaPage' element={<OficinaPage />} > </Route>
        <Route path='/Home' element={<Home1 />} > </Route>
     </Routes>
    </>
  );
}

export default App;